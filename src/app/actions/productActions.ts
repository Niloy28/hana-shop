"use server";

import prisma from "@/lib/db";
import { getUserSession } from "@/lib/server-utils";
import stripe from "@/lib/stripe";
import { createProductData, verifyAdmin } from "@/lib/utils";
import { ProductStatus } from "@prisma/client";
import { redirect } from "next/navigation";

export const createProduct = async (prevState: unknown, formData: FormData) => {
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  const { submission, data } = createProductData(formData);

  if (!data) {
    return submission.reply();
  }

  const newProduct = await prisma.product.create({
    data,
  });

  await stripe.products.create({
    id: newProduct.id,
    name: newProduct.name,
    description: newProduct.description,
    images: [...newProduct.images],
    active: newProduct.productStatus === ProductStatus.Active,
    default_price_data: {
      // Save product price in cents
      unit_amount: Math.round(newProduct.price * 100),
      currency: "usd",
    },
  });

  redirect("/dashboard/products");
};

export const updateProduct = async (prevState: unknown, formData: FormData) => {
  const user = await getUserSession();
  const productID = formData.get("productID") as string;

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  const { submission, data } = createProductData(formData);

  if (!data) {
    return submission.reply();
  }

  const product = await prisma.product.update({
    where: {
      id: productID,
    },
    data,
  });

  // Delete old product and create a new one
  await stripe.products.del(productID);
  await stripe.products.create({
    id: product.id,
    name: product.name,
    description: product.description,
    images: [...product.images],
    active: product.productStatus === ProductStatus.Active,
    default_price_data: {
      unit_amount: product.price * 100,
      currency: "usd",
    },
  });

  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const productID = formData.get("productID") as string;
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  await prisma.product.delete({
    where: {
      id: productID,
    },
  });

  await stripe.products.del(productID);

  redirect("/dashboard/products");
};
