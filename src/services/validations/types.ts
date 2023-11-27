import type { z } from 'zod';

import type { formSchema } from '.';

export type FormSchema = z.infer<typeof formSchema>;
