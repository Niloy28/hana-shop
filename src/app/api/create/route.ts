import prisma from "@/lib/db";
import { verifyAdmin } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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
      ? process.env.PROD_BASE_URL
      : process.env.DEV_BASE_URL;

  return NextResponse.redirect(
    `${baseUrl}${verifyAdmin(user.email) ? "/dashboard" : ""}`,
  );
};
