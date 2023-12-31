import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: Date | string, format: string): string => {
  return dayjs(date).format(format);
};

export const formatPrice = (
  price: number | string,
  currency: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'UAH' = 'USD',
  notation: 'compact' | 'engineering' | 'scientific' | 'standard' = 'standard'
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation
  }).format(Number(price));
};

export const copyToClipboard = (text: string, whatCopied?: string): void => {
  navigator.clipboard.writeText(text);

  if (whatCopied) {
    toast.success(`${whatCopied} copied to the clipboard.`);
  }
};

export const handleWidth = (): number => {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
};

export const getURLOrigin = (): string => {
  return typeof window !== 'undefined' ? window.location.origin : '';
};
