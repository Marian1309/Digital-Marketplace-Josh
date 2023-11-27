import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

import type { Perk, ProductCategory } from '@/types';

export const PERKS: Perk[] = [
  {
    id: 1,
    name: 'Instant Delievery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delievered to your email in seconds and download them right away.'
  },
  {
    id: 2,
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standarts. Not happy? We offer a 30-day refund guaranty.'
  },
  {
    id: 3,
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 1,
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        id: 1,
        name: 'Editor picks',
        href: '/products?category=ui_kits',
        imageSrc: '/images/nav/ui-kits/mixed.jpg'
      },
      {
        id: 2,
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/images/nav/ui-kits/blue.jpg'
      },
      {
        id: 3,
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/images/nav/ui-kits/purple.jpg'
      }
    ]
  },
  {
    id: 2,
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        id: 4,
        name: 'Favorite Icon Picks',
        href: '/products?category=icons',
        imageSrc: '/images/nav/icons/picks.jpg'
      },
      {
        id: 5,
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/images/nav/icons/new.jpg'
      },
      {
        id: 6,
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/images/nav/icons/bestsellers.jpg'
      }
    ]
  }
];

Object.freeze(PERKS);
Object.freeze(PRODUCT_CATEGORIES);
