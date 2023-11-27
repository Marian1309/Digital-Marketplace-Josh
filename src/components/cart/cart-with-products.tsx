import type { FC } from 'react';

import Link from 'next/link';

import { formatPrice } from '@/lib/utils';

import { buttonVariants } from '../ui/button';
import { Separator } from '../ui/separator';
import { SheetFooter, SheetTrigger } from '../ui/sheet';

type Props = {
  fee: number;
};

const CartWithProducts: FC<Props> = ({ fee }) => {
  return (
    <>
      <div className="flex w-full flex-col pr-6">
        {/* TODO: Cart Logic */}
        Cart Items
      </div>

      <div className="space-y-4 pr-6">
        <Separator />

        <div className="space-y-1.5 text-sm">
          <div className="flex">
            <span className="flex-1">Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex">
            <span className="flex-1">Transaction Fee</span>
            <span>{formatPrice(fee)}</span>
          </div>

          <div className="flex">
            <span className="flex-1">Total</span>
            <span>{formatPrice(fee)}</span>
          </div>
        </div>

        <SheetFooter>
          <SheetTrigger asChild>
            <Link
              className={buttonVariants({
                className: 'w-full'
              })}
              href="/cart"
            >
              Continue to Checkout
            </Link>
          </SheetTrigger>
        </SheetFooter>
      </div>
    </>
  );
};

export default CartWithProducts;
