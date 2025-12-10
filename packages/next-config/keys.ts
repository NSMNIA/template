import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    extends: [],
    server: {
      ANALYZE: z.string().optional(),
      NEXT_RUNTIME: z.enum(['nodejs', 'edge']).optional(),
      NODE_ENV: z.enum(['development', 'production']).optional(),
    },
    client: {
      NEXT_PUBLIC_APP_URL: z.url(),
    },
    runtimeEnv: {
      ANALYZE: process.env.ANALYZE,
      NEXT_RUNTIME: process.env.NEXT_RUNTIME,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NODE_ENV: process.env.NODE_ENV,
    },
  });
