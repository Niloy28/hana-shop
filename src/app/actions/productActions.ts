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

  const stripeProduct = await stripe.products.create({
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

  // Update product in DB with Stripe price ID
  await prisma.product.update({
    where: {
      id: newProduct.id,
    },
    data: {
      stripePriceId: stripeProduct.default_price as string,
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

  // Fetch old product data for Stripe update
  const oldProduct = await prisma.product.findUnique({
    where: {
      id: productID,
    },
  });
  const newProduct = await prisma.product.update({
    where: {
      id: productID,
    },
    data,
  });

  // Update product in Stripe except the price
  await stripe.products.update(productID, {
    name: newProduct.name,
    description: newProduct.description,
    images: [...newProduct.images],
    active: newProduct.productStatus === ProductStatus.Active,
  });

  // See if product price has changed
  if (oldProduct!.price !== newProduct.price) {
    // Create and assign a new price object
    const newPrice = await stripe.prices.create({
      product: productID,
      unit_amount: newProduct.price * 100,
      currency: "usd",
    });

    await stripe.products.update(productID, {
      default_price: newPrice.id,
    });

    // Archive the old price object
    await stripe.prices.update(oldProduct!.stripePriceId, {
      active: false,
    });

    // Update product in DB with new Stripe price ID
    await prisma.product.update({
      where: {
        id: productID,
      },
      data: {
        stripePriceId: newPrice.id,
      },
    });
  }

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

  // Set Stripe product to inactive
  await stripe.products.update(productID, {
    active: false,
  });

  redirect("/dashboard/products");
};
