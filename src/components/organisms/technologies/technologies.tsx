import Link from 'next/link';

import {
  AllTechnologies,
  mainTechnologies
} from '@/components/organisms/technologies';

export default function Technologies() {
  return (
    <div className="space-y-8">
      <h2>
        Technologies
        <span className="ml-2 font-medium text-muted-foreground">
          are the foundation of writing production-ready code. I use
        </span>
      </h2>

      <ul className="space-y-5">
        {mainTechnologies.map((technology) => (
          <li key={technology.name}>
            <div className="group relative inline-flex items-center gap-4">
              <Link
                href={technology.href}
                target="_blank"
                title={`Open ${technology.name} website`}
                rel="noopener noreferrer"
              >
                {technology.logo}
                <span className="sr-only">Open {technology.name}</span>
              </Link>

              <h3 className="mb-0 space-x-1 text-base">
                <span>{technology.name}</span>
                <span className="font-medium text-muted-foreground">
                  {technology.description}
                </span>
              </h3>
            </div>
          </li>
        ))}
      </ul>

      <AllTechnologies />
    </div>
  );
}
