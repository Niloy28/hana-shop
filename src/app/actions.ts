"use server";

import prisma from "@/lib/db";
import { verifyAdmin } from "@/lib/utils";
import { productSchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const createProduct = async (prevState: unknown, formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      price: submission.value.price,
      productStatus: submission.value.productStatus,
      // split image string into array
      images: submission.value.images.flatMap((image) =>
        image.split(",").map((url) => url.trim()),
      ),
      isFeatured: submission.value.isFeatured,
    },
  });

  redirect("/dashboard/products");
};
