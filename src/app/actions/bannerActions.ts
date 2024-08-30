"use server";

import prisma from "@/lib/db";
import { verifyAdmin } from "@/lib/utils";
import { bannerSchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const createBanner = async (prevState: unknown, formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
