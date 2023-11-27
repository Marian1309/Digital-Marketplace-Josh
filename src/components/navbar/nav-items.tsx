'use client';

import { type FC, useEffect, useRef, useState } from 'react';

import { PRODUCT_CATEGORIES } from '@/lib/constants';

import { useOnOutsideClick } from '@/hooks/use-on-outside-click';

import NavItem from './nav-item';

const NavItems: FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);

  useOnOutsideClick(navRef, () => setActiveIndex(null));

  const isAnyOpen = activeIndex !== null;

  return (
    <div ref={navRef} className="flex h-full gap-4">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return (
          <NavItem
            key={index}
            category={category}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
