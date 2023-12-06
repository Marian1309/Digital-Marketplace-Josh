import type { authCredentialsSchema } from '.';
import type { z } from 'zod';

export type AuthCredentialsSchema = z.infer<typeof authCredentialsSchema>;
