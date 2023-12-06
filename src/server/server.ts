import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

import { PORT } from '../lib/constants';
import { appRouter } from '../services/trpc/router';

import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

const app = express();

const createContext = ({
  req,
  res
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res
});

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      }
    }
  });

  app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext
    })
  );

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, () => {
      payload.logger.info(
        `Next.js App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
