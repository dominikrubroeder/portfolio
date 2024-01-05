import { promises as fs } from 'fs';
import { Data } from '@/lib/interfaces';

export async function getData(): Promise<Data> {
  if (process.env.NODE_ENV === 'development') {
    const res = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    return JSON.parse(res);
  } else {
    const res = await fetch('https://dominikrubroeder.vercel.app/data.json', {
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
    (tool) => tool.title.toLowerCase() === toolTitle.toLowerCase()
  );
}

export async function getTechnologies() {
  const { technologies } = await getData();
  return technologies;
}

export async function getSocials() {
  const { socials } = await getData();
  return socials;
}
