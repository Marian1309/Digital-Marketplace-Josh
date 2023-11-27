'use client';

import type { FC, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import store from '@/context/store';

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ContextProvider;
