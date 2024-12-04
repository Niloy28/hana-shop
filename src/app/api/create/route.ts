export const dynamic = "force-dynamic";

import { env } from "@/env/client";
import prisma from "@/lib/db";
import { getUserSession } from "@/lib/server-utils";
import { verifyAdmin } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  const user = await getUserSession();

  if (!user || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? env.NEXT_PUBLIC_PROD_BASE_URL
      : env.NEXT_PUBLIC_DEV_BASE_URL;

  return NextResponse.redirect(
    `${baseUrl}${verifyAdmin(user.email) ? "/dashboard" : ""}`,
  );
};
