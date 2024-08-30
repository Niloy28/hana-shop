"use client";

import { createBanner } from "@/app/actions/bannerActions";
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
import { UploadDropzone } from "@/lib/uploadthing";
import { bannerSchema } from "@/lib/zodSchema";
import { useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { ClientUploadedFileData } from "uploadthing/types";
import FormFieldWrapper from "../products/create/FormFieldWrapper";

const BannerForm = () => {
  const [image, setImage] = useState("");
  const [latestState, action] = useFormState(createBanner, undefined);
  const [form, fields] = useForm({
    lastResult: latestState,
    constraint: getZodConstraint(bannerSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: bannerSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const onBannerUploadComplete = (
    response: ClientUploadedFileData<{ uploadedBy: string }>[],
  ) => {
    setImage(response[0].url);
  };

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/banners">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          New Banner
        </h1>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Banner Details</CardTitle>
          <CardDescription>Add new banner details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <FormFieldWrapper
              className="items-center justify-center"
              errors={image ? undefined : fields.source.errors}
            >
              <Label htmlFor={fields.source.id} className="self-start">
                Banner Image
              </Label>
              <Input
                type="hidden"
                key={fields.source.key}
                name={fields.source.name}
                value={image}
                defaultValue={fields.source.initialValue as any}
              />
              {image ? (
                <div className="flex w-full max-w-3xl items-center justify-center">
                  <Image
                    src={image}
                    alt="Banner"
                    width={400}
                    height={250}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              ) : (
                <UploadDropzone
                  endpoint="bannerUploader"
                  onClientUploadComplete={onBannerUploadComplete}
                />
              )}
            </FormFieldWrapper>
            <FormFieldWrapper errors={fields.title.errors}>
              <Label htmlFor={fields.title.id}>Title</Label>
              <Input
                type="text"
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                className="w-full"
                placeholder="Banner Title"
              />
            </FormFieldWrapper>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton>Create Banner</SubmitButton>
        </CardFooter>
      </Card>
    </form>
  );
};

export default BannerForm;
