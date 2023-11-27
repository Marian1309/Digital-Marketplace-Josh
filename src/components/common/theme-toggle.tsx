'use client';

import type { FC } from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const ThemeToggle: FC = () => {
  const { setTheme } = useTheme();

  const DROPDOWN_MENU_ITEMS: { id: number; label: string }[] = [
    { id: 1, label: 'Light' },
    { id: 2, label: 'Dark' },
    { id: 3, label: 'System' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {DROPDOWN_MENU_ITEMS.map(({ label, id }) => (
          <DropdownMenuItem
            key={id}
            onClick={() => setTheme(label.toLowerCase())}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ThemeToggle;
