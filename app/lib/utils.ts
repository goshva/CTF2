import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorFilter = (colors: string[], productColor: string): boolean => colors.includes(productColor);

export const priceRangeFilter = (min: number, max: number, productPrice: string) => {
  const numberPrice = parseFloat(productPrice.replace(',', '.'));
  return numberPrice >= min && numberPrice <= max
};