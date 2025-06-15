import Link from 'next/link';

import { AllTools, mainTools } from '@/components/organisms/tools';

export function Tools() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2>
          Tools
          <span className="ml-2 font-medium text-muted-foreground">
            help to visualize, communicate and support to build the application
            we create. I use
          </span>
        </h2>

        <ul className="space-y-5">
          {mainTools.map((tool) => (
            <li key={tool.name}>
              <div className="inline-flex items-center gap-4">
                <Link
                  href={tool.href}
                  target="_blank"
                  title={`Open ${tool.name} website`}
                  rel="noopener noreferrer"
                >
                  {tool.logo}
                  <span className="sr-only">Open {tool.name}</span>
                </Link>

                <h3 className="mb-0 space-x-1">
                  <span>{tool.name}</span>
                  <span className="font-medium text-muted-foreground">
                    {tool.description}
                  </span>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <AllTools />
    </div>
  );
}
