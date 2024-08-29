"use server";

import prisma from "@/lib/db";
import { createProductData, verifyAdmin } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const createProduct = async (prevState: unknown, formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
