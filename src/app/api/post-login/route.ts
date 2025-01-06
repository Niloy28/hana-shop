export const dynamic = "force-dynamic";

import { env } from "@/env/server";
import prisma from "@/lib/db";
import { getUserSession } from "@/lib/server-utils";
import { verifyAdmin } from "@/lib/utils";
import { NextResponse } from "next/server";

// Post Login API route
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
      ? env.PROD_BASE_URL
      : env.DEV_BASE_URL;

  return NextResponse.redirect(
    `${baseUrl}${verifyAdmin(user.email) ? "/dashboard" : ""}`,
  );
};
