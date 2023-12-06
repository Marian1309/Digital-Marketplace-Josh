import { initTRPC } from '@trpc/server';
import axios from 'axios';

const t = initTRPC.create({});

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
