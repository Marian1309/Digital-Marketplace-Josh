import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@/api/trpc/trpc-router';

const trpc = createTRPCReact<AppRouter>();

export default trpc;
