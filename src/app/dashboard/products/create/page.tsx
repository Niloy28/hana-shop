"use client";

import { createProduct } from "@/app/actions";
import ProductForm from "@/components/dashboard/products/ProductForm";
import { productSchema } from "@/lib/zodSchema";
import { useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import { useFormState } from "react-dom";
import { ClientUploadedFileData } from "uploadthing/types";

const CreateProductPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [latestState, action] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    lastResult: latestState,
    constraint: getZodConstraint(productSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: productSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const onImageUploadComplete = (
    response: ClientUploadedFileData<{ uploadedBy: string }>[],
  ) => {
    setImages((oldImages) => oldImages.concat(response.map((r) => r.url)));
  };

  const onImageDelete = (index: number) => {
    setImages((oldImages) => oldImages.filter((_, i) => i !== index));

    // TODO: Remove file from uploadthing
  };

  return <ProductForm />;
};

export default CreateProductPage;
