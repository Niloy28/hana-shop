"use server";

import prisma from "@/lib/db";
import { redis } from "@/lib/redis";
import { getUserSession } from "@/lib/server-utils";
import { CartData } from "@/types/cart-data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addCartItem = async (productID: string) => {
  const user = await getUserSession();

  if (!user) {
    return redirect("/");
  }

  const cart: CartData | null = await redis.get(`cart-${user.id}`);

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

  let myCart = {} as CartData;

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
  revalidatePath("/", "layout");
};

type ItemChange = "Increase" | "Decrease";

export const changeCartItemCount = async (
  change: ItemChange,
  formData: FormData,
) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/");
  }

  const productID = formData.get("productID");
  let cart: CartData | null = await redis.get(`cart-${user.id}`);

  if (cart && cart.items) {
    const updatedCart: CartData = {
      userID: user.id,
      items: cart.items.map((item) => {
        if (item.id === productID) {
          item.quantity += change == "Increase" ? 1 : -1;
        }

        return item;
      }),
    };

    await redis.set(`cart-${user.id}`, updatedCart);
  }

  revalidatePath("/cart");
};

export const deleteCartItem = async (formData: FormData) => {
  const user = await getUserSession();

  if (!user) {
    redirect("/");
  }

  const productID = formData.get("productID");
  let cart: CartData | null = await redis.get(`cart-${user.id}`);

  if (cart && cart.items) {
    const updatedCart: CartData = {
      userID: user.id,
      items: cart.items.filter((item) => item.id !== productID),
    };

    await redis.set(`cart-${user.id}`, updatedCart);
  }

  revalidatePath("/cart");
};
