import { fetchURLDevelopment } from '@/lib';
import { promises as fs } from 'fs';
import { formatTitle } from '@/lib/helpers';
import { Technology } from '@/interfaces';

export async function fetchTechnologies(): Promise<Technology[] | undefined> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = await fs.readFile(
        process.cwd() + fetchURLDevelopment + '/technologies.json',
        'utf8'
      );
      const { technologies } = JSON.parse(response);

      return technologies;
    } else {
      const res = await fetch('https://www.dominikrubroeder.dev/data.json', {
        next: { revalidate: 300 }
      });

      const { technologies } = await res.json();
      return technologies;
    }
  } catch (e) {
    console.error('Error fetching technologies – fetchTechnologies()', e);
  }

  return undefined;
}

export async function fetchTechnology(
  technologyHandle: string
): Promise<Technology | undefined> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = await fs.readFile(
        process.cwd() + fetchURLDevelopment + '/technologies.json',
        'utf8'
      );
      const data = JSON.parse(response);
      const technologies = data.technologies as Technology[];

      return technologies.find(
        (technology) =>
          formatTitle(technology.title) === formatTitle(technologyHandle)
      );
    } else {
      const res = await fetch('https://www.dominikrubroeder.dev/data.json', {
        next: { revalidate: 300 }
      });

      const data = await res.json();
      const technologies = data.technologies as Technology[];

      return technologies.find(
        (technology) =>
          formatTitle(technology.title) === formatTitle(technologyHandle)
      );
    }
  } catch (e) {
    console.error(
      `Error fetch technology – 'fetchTechnology()' with handle '${technologyHandle}'`,
      e
    );
  }

  return undefined;
}
