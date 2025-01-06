import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DEV_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_PROD_BASE_URL: z.string().min(1),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DEV_BASE_URL: process.env.NEXT_PUBLIC_DEV_BASE_URL,
    NEXT_PUBLIC_PROD_BASE_URL: process.env.NEXT_PUBLIC_PROD_BASE_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
  },
});
