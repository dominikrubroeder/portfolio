import Link from 'next/link';
import Brand from '@/components/atoms/brand';
import type { BrandType as BrandType } from '@/types';
import { tools } from '@/components/organisms/tool-section/data';

export default function ToolGrid() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {tools.map((tool) => {
        if (tool.priority === 'high')
          return (
            <li key={tool.title}>
              <div className="group grid gap-6 whitespace-normal">
                <div className="relative h-80 rounded-xl border">
                  <Link
                    href={tool.website}
                    className="absolute inset-0 flex size-full cursor-pointer items-center justify-center"
                    target="_blank"
                    title={`Go to ${tool.title} page`}
                    aria-label={`Go to ${tool.title} page`}
                  >
                    <Brand
                      brand={tool.title as BrandType}
                      className="h-32 w-auto"
                      aria-label={`${tool.title} logo`}
                    />
                  </Link>
                </div>

                <div className="mx-auto w-max rounded-3xl border  px-3 py-2 font-bold text-foreground">
                  {tool.keyword}
                </div>

                <div className="grid h-20 content-start gap-2">
                  <Link
                    href={tool.website}
                    className="mx-auto font-bold text-foreground"
                    target="_blank"
                  >
                    <h2>{tool.title}</h2>
                  </Link>

                  {'description' in tool && (
                    <p className="line-clamp-2 text-center italic">
                      {tool.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          );
      })}
    </ul>
  );
}
