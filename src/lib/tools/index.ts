import { Tool } from '@/interfaces';
import { promises as fs } from 'fs';
import { fetchURLDevelopment } from '@/lib';
import { formatTitle } from '@/lib/helpers';

export async function fetchTools(): Promise<Tool[] | undefined> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = await fs.readFile(
        process.cwd() + fetchURLDevelopment + '/tools.json',
        'utf8'
      );
      const { tools } = JSON.parse(response);

      return tools;
    } else {
      const res = await fetch('https://www.dominikrubroeder.dev/data.json', {
        next: { revalidate: 300 }
      });

      const { tools } = await res.json();
      return tools;
    }
  } catch (e) {
    console.error('Error fetching tools – fetchTools()', e);
  }

  return undefined;
}

export async function fetchTool(toolHandle: string): Promise<Tool | undefined> {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = await fs.readFile(
        process.cwd() + fetchURLDevelopment + '/tools.json',
        'utf8'
      );
      const data = JSON.parse(response);
      const tools = data.tools as Tool[];

      return tools.find(
        (tool) => formatTitle(tool.title) === formatTitle(toolHandle)
      );
    } else {
      const res = await fetch('https://www.dominikrubroeder.dev/data.json', {
        next: { revalidate: 300 }
      });

      const { tools } = await res.json();
      return tools;
    }
  } catch (e) {
    console.error(
      `Error fetch tool – 'fetchTool()' with handle '${toolHandle}'`,
      e
    );
  }

  return undefined;
}
