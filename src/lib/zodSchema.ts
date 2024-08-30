import { Category, ProductStatus } from "@prisma/client";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  productStatus: z.nativeEnum(ProductStatus),
  price: z.number().min(1),
  images: z.array(z.string()).nonempty("At least 1 image is required"),
  category: z.nativeEnum(Category),
  isFeatured: z.boolean().optional(),
});

export const bannerSchema = z.object({
  title: z.string().min(1),
  source: z.string().min(1),
});
