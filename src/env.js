import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const env = createEnv({
  client: {},
  server: {
    RESEND_API_KEY: z.string()
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  }
});

export default env;
