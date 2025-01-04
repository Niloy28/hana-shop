"use server";

import prisma from "@/lib/db";
import { redis } from "@/lib/redis";
import { getUserSession } from "@/lib/server-utils";
import { CartData } from "@/types/cart-data";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addCartItem = async (productID: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productID,
    },
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  let myCart = {
    userID: "local-00000",
    items: [],
  } as CartData;
  let savedCart = {} as CartData;

  const user = await getUserSession();
  if (!user) {
    // get existing local cart (if available) and merge new cart
    const cookieRawCart = (await cookies()).get("cart");
    if (cookieRawCart) {
      savedCart = JSON.parse(cookieRawCart.value) as CartData;
      let itemFound = false;

      myCart.items = savedCart.items.map((item) => {
        if (item.id === product.id) {
          itemFound = true;
          item.quantity += 1;
        }

        return item;
      });

      if (!itemFound) {
        myCart.items = [...savedCart.items];
        myCart.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
        });
      }
    } else {
      myCart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      });
    }

    (await cookies()).set("cart", JSON.stringify(myCart));
  } else {
    const cart: CartData | null = await redis.get(`cart-${user.id}`);

    if (!cart || !cart.items) {
      myCart = {
        userID: user.id,
        items: [
          {
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity: 1,
          },
        ],
      };
    } else {
      let itemFound = false;

      myCart.items = cart.items.map((item) => {
        if (item.id === product.id) {
          itemFound = true;
          item.quantity += 1;
        }

        return item;
      });

      if (!itemFound) {
        myCart.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
        });
      }
    }

    await redis.set(`cart-${user.id}`, myCart);
  }

  revalidatePath("/", "layout");
};

type ItemChange = "Increase" | "Decrease";

export const changeCartItemCount = async (
  change: ItemChange,
  formData: FormData,
) => {
  const user = await getUserSession();
  const productID = formData.get("productID");
  let savedCart = {} as CartData;

  if (!user) {
    // update local cart
    const cookieRawCart = (await cookies()).get("cart");
    savedCart = JSON.parse(cookieRawCart!.value) as CartData;
  } else {
    // update redis cart
    savedCart = (await redis.get(`cart-${user.id}`)) as CartData;
  }

  savedCart.items = savedCart.items.map((item) => {
    if (item.id === productID) {
      item.quantity += change == "Increase" ? 1 : -1;
    }

    return item;
  });

  if (!user) {
    (await cookies()).set("cart", JSON.stringify(savedCart));
  } else {
    await redis.set(`cart-${user.id}`, savedCart);
  }

  revalidatePath("/cart");
};

export const deleteCartItem = async (formData: FormData) => {
  const user = await getUserSession();
  const productID = formData.get("productID");
  let savedCart = {} as CartData;

  if (!user) {
    // update local cart
    const cookieRawCart = (await cookies()).get("cart");
    savedCart = JSON.parse(cookieRawCart!.value) as CartData;
  } else {
    // update redis cart
    savedCart = (await redis.get(`cart-${user.id}`)) as CartData;
  }

  savedCart.items = savedCart.items.filter((item) => item.id !== productID);

  if (!user) {
    (await cookies()).set("cart", JSON.stringify(savedCart));
  } else {
    await redis.set(`cart-${user.id}`, savedCart);
  }

  revalidatePath("/cart");
};
