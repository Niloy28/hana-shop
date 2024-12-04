"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserSession = async () => {
  const { getUser } = getKindeServerSession();
  return await getUser();
};
