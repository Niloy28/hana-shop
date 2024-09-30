"use server";

import prisma from "@/lib/db";
import { redis } from "@/lib/redis";
import { CartData } from "@/types/cart-data";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const addCartItem = async (productID: string) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
};
