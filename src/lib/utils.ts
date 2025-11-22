import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeWords(input: string): string {
  return (
    input
      // Sonderzeichen durch Leerzeichen ersetzen
      .replace(/[^0-9\p{L}]+/gu, ' ')
      // Mehrfache Leerzeichen entfernen
      .trim()
      .replace(/\s+/g, ' ')
      // Wörter kapitalisieren
      .toLowerCase()
      .replace(/\b\p{L}/gu, (c) => c.toUpperCase())
  );
}
