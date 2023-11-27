'use client';

import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronDown } from 'lucide-react';

import type { PRODUCT_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

type Category = (typeof PRODUCT_CATEGORIES)[number];

type Props = {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
};

const NavItem: FC<Props> = ({ category, handleOpen, isOpen, isAnyOpen }) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}
          <ChevronDown
            className={cn('h-4 w-4 text-muted-foreground transition-all', {
              '-rotate-180': isOpen
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            'absolute inset-x-0 top-full text-sm text-muted-foreground',
            {
              'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen
            }
          )}
        >
          <div
            aria-label="aria"
            className="absolute inset-0 top-1/2 bg-white shadow"
          >
            <div className="relative bg-white">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.featured.map((item) => (
                      <div
                        key={item.id}
                        className="group relative text-base hover:cursor-pointer sm:text-sm"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          <Image
                            alt={item.name}
                            className="object-cover object-center"
                            fill
                            src={item.imageSrc}
                          />
                        </div>

                        <Link
                          className="mt-6 block font-medium text-gray-900"
                          href={item.href}
                        >
                          {item.name}
                        </Link>
                        <p aria-label="aria" className="mt-1">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
