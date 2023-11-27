import type { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import ContextProvider from '@/services/providers/context';
import HotToastProvider from '@/services/providers/hot-toast';
import ThemeProvider from '@/services/providers/theme';
import TrpcProvider from '@/services/providers/trpc';

import { dynaPuff } from '@/lib/fonts';

import './globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs.marian1309.vercel.app'),
  title: {
    template: '%s • Next.js 13',
    default: 'Next.js 13'
  },
  description: 'Next.js 13 Starter',
  creator: 'Marian Pidchashyi',
  keywords: [
    'Next.js',
    'React',
    'TailwindCSS',
    'Server Components',
    'Clerk',
    'ShadcnUI',
    'TypeScript',
    'Prisma',
    'TRPC'
  ]
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dynaPuff.className}>
        <HotToastProvider />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          themes={['light', 'dark']}
        >
          <TrpcProvider>
            <ContextProvider>
              <main className="relative flex min-h-screen flex-col">
                <div className="flex-1 flex-grow">{children}</div>
              </main>
            </ContextProvider>
          </TrpcProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
