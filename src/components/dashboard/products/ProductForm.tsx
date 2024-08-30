"use client";

import { SelectConform } from "@/components/conform/SelectConform";
import { SwitchConform } from "@/components/conform/SwitchConform";
import ImageUploadDisplay from "@/components/dashboard/products/create/ImageUploadDisplay";
import ProductFormFieldWrapper from "@/components/dashboard/products/create/ProductFormFieldWrapper";
import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { enumToString } from "@/lib/utils";
import { productSchema } from "@/lib/zodSchema";
import { SubmissionResult, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { Category, Product, ProductStatus } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { ClientUploadedFileData } from "uploadthing/types";

const ProductForm = ({
  product,
  formAction,
}: Readonly<{
  product?: Product;
  formAction: (
    prevState: unknown,
    formData: FormData,
  ) => Promise<SubmissionResult<string[]> | undefined>;
}>) => {
  const [images, setImages] = useState<string[]>(product?.images ?? []);
  const [latestState, action] = useFormState(formAction, undefined);
  const [form, fields] = useForm({
    defaultValue: {
      name: product?.name ?? "",
      description: product?.description ?? "",
      productStatus: product?.productStatus ?? "",
      price: product?.price ?? "",
      category: product?.category ?? "",
      images: product?.images ?? [],
      isFeatured: product?.isFeatured ?? false,
    },
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

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {product ? product.name : "New Product"}
        </h1>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            {product ? "Edit product details" : "Add new product details"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              type="hidden"
              key={form.id}
              name="productID"
              value={product?.id ?? ""}
            />
            <ProductFormFieldWrapper errors={fields.name.errors}>
              <Label htmlFor={fields.name.id}>Name</Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={fields.name.initialValue}
                className="w-full"
                placeholder="Product Name"
              />
            </ProductFormFieldWrapper>
            <ProductFormFieldWrapper errors={fields.description.errors}>
              <Label htmlFor={fields.description.id}>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={fields.description.initialValue}
                placeholder="Write product description here"
              />
            </ProductFormFieldWrapper>

            <ProductFormFieldWrapper errors={fields.price.errors}>
              <Label htmlFor={fields.price.id}>Price</Label>
              <span className="flex items-center gap-2">
                <p className="text-xl">$</p>
                <Input
                  type="number"
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={fields.price.initialValue}
                  placeholder="Input price in USD"
                />
              </span>
            </ProductFormFieldWrapper>

            <ProductFormFieldWrapper errors={fields.isFeatured.errors}>
              <div className="flex items-center gap-3">
                <Label htmlFor={fields.isFeatured.id}>Featured Product</Label>
                <SwitchConform meta={fields.isFeatured} />
              </div>
            </ProductFormFieldWrapper>

            <ProductFormFieldWrapper errors={fields.productStatus.errors}>
              <Label htmlFor={fields.productStatus.id}>Status</Label>
              <SelectConform
                placeholder="Select Product Status"
                meta={fields.productStatus}
                items={Object.values(ProductStatus).map((productStatus) => ({
                  name: enumToString(productStatus),
                  value: productStatus,
                }))}
              />
            </ProductFormFieldWrapper>

            <ProductFormFieldWrapper errors={fields.category.errors}>
              <Label htmlFor={fields.category.id}>Category</Label>
              <SelectConform
                placeholder="Select Product Category"
                meta={fields.category}
                items={Object.values(Category).map((category) => ({
                  name: enumToString(category),
                  value: category,
                }))}
              />
            </ProductFormFieldWrapper>

            <ProductFormFieldWrapper
              errors={images.length > 0 ? undefined : fields.images.errors}
            >
              <Label htmlFor={fields.images.id}>Images</Label>
              <Input
                type="hidden"
                key={fields.images.key}
                name={fields.images.name}
                value={images}
                defaultValue={fields.images.initialValue as any}
              />
              {images.length > 0 ? (
                <div className="flex flex-col items-start gap-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {images.map((image, index) => (
                      <ImageUploadDisplay
                        key={index}
                        image={image}
                        index={index}
                        onImageDelete={onImageDelete}
                      />
                    ))}
                  </div>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={onImageUploadComplete}
                  />
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={onImageUploadComplete}
                />
              )}
            </ProductFormFieldWrapper>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton>
            {product ? "Update Product" : "Create Product"}
          </SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ProductForm;
