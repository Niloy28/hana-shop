"use server";

import prisma from "@/lib/db";
import { inquirySchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const sendCustomerInquiry = async (
  prevState: unknown,
  formData: FormData,
) => {
  const submission = parseWithZod(formData, {
    schema: inquirySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.inquiry.create({
    data: {
      name: submission.value.name,
      email: submission.value.email,
      inquiry: submission.value.inquiry,
    },
  });

  redirect("/");
};
