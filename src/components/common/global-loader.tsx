'use client';

import type { FC } from 'react';

import { BounceLoader } from 'react-spinners';

const GlobalLoader: FC = () => {
  const color = getComputedStyle(document.body).getPropertyValue(
    '--foreground'
  );

  return (
    <div className="h-adaptive flex-center">
      <BounceLoader color={`hsl(${color})`} loading size={40} />
    </div>
  );
};

export default GlobalLoader;
