import { initTRPC } from '@trpc/server';
import axios from 'axios';
import superjson from 'superjson';

const t = initTRPC.create({
  transformer: superjson
});

const { router, procedure } = t;

export const appRouter = router({
  getUsers: procedure.query(async () => {
    type User = {
      id: number;
      name: string;
      email: string;
    };

    const { data } = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );

    return data;
  })
});

export type AppRouter = typeof appRouter;
