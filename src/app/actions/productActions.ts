"use server";

import prisma from "@/lib/db";
import { getUserSession } from "@/lib/server-utils";
import { createProductData, verifyAdmin } from "@/lib/utils";
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

  await prisma.product.create({
    data,
  });

  redirect("/dashboard/products");
};

export const updateProduct = async (prevState: unknown, formData: FormData) => {
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  const { submission, data } = createProductData(formData);

  if (!data) {
    return submission.reply();
  }

  await prisma.product.update({
    where: {
      id: formData.get("productID") as string,
    },
    data,
  });

  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  await prisma.product.delete({
    where: {
      id: formData.get("productID") as string,
    },
  });

  redirect("/dashboard/products");
};
