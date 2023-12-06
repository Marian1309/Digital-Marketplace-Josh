import { TRPCError } from '@trpc/server';

import { getPayloadClient } from '@/server/get-payload';

import { authCredentialsSchema } from '@/services/validations';

import { publicProcedure, router } from '../trpc';

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(authCredentialsSchema)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email
          }
        }
      });

      if (users.length !== 0) {
        throw new TRPCError({ code: 'CONFLICT' });
      }

      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: 'user'
        }
      });

      return {
        success: true,
        sentToEmail: email
      };
    })
});
