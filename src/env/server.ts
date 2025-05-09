import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DEV_BASE_URL: z.string().url(),
    PROD_BASE_URL: z.string().url(),
    DATABASE_URL: z.string().url(),
    DIRECT_URL: z.string().url(),
    KINDE_CLIENT_ID: z.string().min(1),
    KINDE_CLIENT_SECRET: z.string().min(1),
    KINDE_ISSUER_URL: z.string().min(1),
    KINDE_SITE_URL: z.string().min(1),
    KINDE_POST_LOGOUT_REDIRECT_URL: z.string().min(1),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string().min(1),
    ADMIN_EMAIL: z.string().min(1),
    UPLOADTHING_TOKEN: z.string().min(1),
    UPSTASH_REDIS_REST_URL: z.string().min(1),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
    STRIPE_CLIENT_SECRET: z.string().min(1),
    STRIPE_SECRET_WEBHOOK_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {},
});
