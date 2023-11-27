import type { LucideIcon } from 'lucide-react';

export type Perk = {
  id: number;
  name: string;
  Icon: LucideIcon;
  description: string;
};

export type ProductCategory = {
  id: number;
  label: string;
  value: string;
  featured: {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
  }[];
};
