import { fetchURLDevelopment, fetchURLProduction } from '@/lib';
import { promises as fs } from 'fs';
import { Social } from '@/interfaces';

export async function fetchSocials(): Promise<Social[] | undefined> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = await fs.readFile(
        process.cwd() + fetchURLDevelopment + '/socials.json',
        'utf8'
      );
      const { socials } = JSON.parse(response);
      return socials;
    } else {
      const res = await fetch(fetchURLProduction + '/socials.json', {
        next: { revalidate: 300 }
      });
      const { socials } = await res.json();
      return socials;
    }
  } catch (e) {
    console.error('Error fetching socials – fetchSocials()', e);
  }

  return undefined;
}
