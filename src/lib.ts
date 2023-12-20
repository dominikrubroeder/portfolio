import { promises as fs } from 'fs';
import { Data, Social, Technology, Tool } from '@/interfaces';

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

export async function getTools(): Promise<Tool[]> {
  const { tools } = await getData();
  return tools;
}

export async function getTechnologies(): Promise<Technology[]> {
  const { technologies } = await getData();
  return technologies;
}

export async function getSocials(): Promise<Social[]> {
  const { socials } = await getData();
  return socials;
}
