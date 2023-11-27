'use client';

import type { FC } from 'react';

import { ShoppingCart } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet';

import CartWithProducts from './cart-with-products';
import EmptyCart from './empty-cart';

const Cart: FC = () => {
  const itemCount = 0;
  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden
          className="h-6 w-6 flex-shrink text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? <CartWithProducts fee={fee} /> : <EmptyCart />}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
