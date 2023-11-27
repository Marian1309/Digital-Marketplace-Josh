import type { FC } from 'react';

import Link from 'next/link';

import MaxWidthWrapper from '@/components/common/max-width-wrapper';

import Icons from '../icons';
import { buttonVariants } from '../ui/button';

import NavItems from './nav-items';

const Navbar: FC = () => {
  const user = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      className={buttonVariants({
                        variant: 'ghost'
                      })}
                      href="/sign-in"
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  )}

                  {user ? (
                    <p />
                  ) : (
                    <Link
                      className={buttonVariants({
                        variant: 'ghost'
                      })}
                      href="/sign-up"
                    >
                      Create an Acoount
                    </Link>
                  )}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                    </div>
                  )}

                  <div className="ml-4 flow-root lg:ml-6">
                    {/* TODO: Cart */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
