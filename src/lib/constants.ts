import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

import type { Perk } from '@/types';

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

Object.freeze(PERKS);
