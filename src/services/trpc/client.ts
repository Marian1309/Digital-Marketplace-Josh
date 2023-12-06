import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '@/services/trpc/router';

const trpc = createTRPCReact<AppRouter>();

export default trpc;
