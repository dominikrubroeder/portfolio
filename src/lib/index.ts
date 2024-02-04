import { promises as fs } from 'fs';
import { Data } from '@/interfaces';
import { formatTitle } from '@/lib/helpers';

export async function getData(): Promise<Data> {
  if (process.env.NODE_ENV === 'development') {
    const res = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    return JSON.parse(res);
  } else {
    const res = await fetch('https://www.dominikrubroeder.dev/data.json', {
      next: { revalidate: 300 }
    });
    return res.json();
  }
}

export async function getTools() {
  const { tools } = await getData();
  return tools;
}

export async function getTool(toolTitle: string) {
  const { tools } = await getData();
  return tools.find(
    (tool) => formatTitle(tool.title) === formatTitle(toolTitle)
  );
}

export async function getTechnologies() {
  const { technologies } = await getData();
  return technologies;
}

export async function getTechnology(technologyTitle: string) {
  const { technologies } = await getData();
  return technologies.find(
    (technology) =>
      formatTitle(technology.title) === formatTitle(technologyTitle)
  );
}

export async function getSocials() {
  const { socials } = await getData();
  return socials;
}
