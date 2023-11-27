import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@/api/trpc/trpc-router';

import { getURLOrigin } from '@/lib/utils';

const trpcServer = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${getURLOrigin()}/api/trpc`
    })
  ]
});

export default trpcServer;
