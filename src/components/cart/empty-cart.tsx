import { memo } from 'react';
import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '../ui/button';
import { SheetTrigger } from '../ui/sheet';

const EmptyCart: FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-1">
      <div
        aria-hidden
        className="relative mb-4 h-60 w-60 text-muted-foreground"
      >
        <Image
          alt="Empty shopping cart"
          fill
          src="/images/hippo-empty-cart.png"
        />
      </div>

      <span className="text-xl font-semibold">Your cart is empty</span>

      <SheetTrigger asChild>
        <Link
          className={buttonVariants({
            variant: 'link',
            size: 'sm',
            className: 'text-sm text-muted-foreground'
          })}
          href="/products"
        >
          Add items to your cart to checkout
        </Link>
      </SheetTrigger>
    </div>
  );
};

export default memo(EmptyCart);
