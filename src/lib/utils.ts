import { env } from "@/env/server";
import { parseWithZod } from "@conform-to/zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { productSchema } from "./zodSchema";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toCurrencyString = (currency: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(currency);
};

export const verifyAdmin = (email: string | null | undefined) => {
  return (
    email !== null &&
    email !== undefined &&
    env.ADMIN_EMAIL.split(",").includes(email)
  );
};

export const enumToString = (enumName: string) => {
  return enumName.split("_").join(" ");
};

export const createProductData = (formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    return { submission, data: undefined };
  }

  return {
    submission,
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
      // value is empty when switch is unchecked
      isFeatured: submission.value.isFeatured ?? false,
    },
  };
};
