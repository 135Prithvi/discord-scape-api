import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DISCORD_URL: z.string().url(),
    UPSTASH_REDIS_REST_URL: z.string().url(),
    DISCORD_AUTH_TOKEN: z.string().min(3),  
    UPSTASH_REDIS_REST_TOKEN: z.string().min(3),  
  },
  client: {
    NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    DISCORD_URL: process.env.DISCORD_URL,           
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,           
    DISCORD_AUTH_TOKEN: process.env.DISCORD_AUTH_TOKEN,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
