'use client';

import type { NextPage } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/navigation';

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="flex-col flex-center" onClick={() => router.push('/')}>
        <Error statusCode={404} />
      </body>
    </html>
  );
};

export default NotFound;
