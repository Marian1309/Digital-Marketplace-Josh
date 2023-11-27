'use client';

import type { FC } from 'react';

import type { ToastOptions } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const toastOptions: ToastOptions = {
  style: { background: '#333', color: '#fff' },
  duration: 2500
};

const HotToastProvider: FC = () => {
  return <Toaster toastOptions={toastOptions} />;
};

export default HotToastProvider;
