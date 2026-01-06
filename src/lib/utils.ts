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

export function formatDate({
  dateString,
  format = 'Month Day, Year at Time',
  options
}: {
  dateString: string;
  format?: 'Month Day, Year' | 'Month Day, Year at Time';
  options?: Intl.DateTimeFormatOptions;
}) {
  const date = new Date(dateString);
  let fallbackOptions: Intl.DateTimeFormatOptions;

  switch (format) {
    case 'Month Day, Year':
      fallbackOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      break;
    default:
      fallbackOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
  }

  return date.toLocaleString('en-US', options ?? fallbackOptions);
}
