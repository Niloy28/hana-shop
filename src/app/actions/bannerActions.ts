"use server";

import prisma from "@/lib/db";
import { getUserSession } from "@/lib/server-utils";
import { verifyAdmin } from "@/lib/utils";
import { bannerSchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const createBanner = async (prevState: unknown, formData: FormData) => {
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  const submission = parseWithZod(formData, {
    schema: bannerSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.banner.create({
    data: {
      title: submission.value.title,
      source: submission.value.source,
    },
  });

  redirect("/dashboard/banners");
};

export const deleteBanner = async (formData: FormData) => {
  const user = await getUserSession();

  if (!user || !verifyAdmin(user.email)) {
    return redirect("/");
  }

  await prisma.banner.delete({
    where: {
      id: formData.get("bannerID") as string,
    },
  });

  redirect("/dashboard/banners");
};
