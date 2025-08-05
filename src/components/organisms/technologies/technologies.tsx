import { Button } from '@/components/atoms/button';
import {
  AllTechnologies,
  mainTechnologies
} from '@/components/organisms/technologies';

export default function Technologies() {
  return (
    <div className="scroll-mt-24 space-y-8" id="technologies">
      <h2>
        Technologies
        <span className="ml-2 font-medium text-muted-foreground">
          are the foundation of writing production-ready code. I use
        </span>
      </h2>

      <ul className="-ml-4 space-y-1">
        {mainTechnologies.map((technology) => (
          <li key={technology.name}>
            <div className="inline-flex items-center gap-4">
              <Button
                variant="ghost"
                href={technology.href}
                title={`Open ${technology.name} website`}
                className="p-4 [&>svg]:size-12"
              >
                {technology.logo}
                <span className="sr-only">Open {technology.name}</span>
              </Button>

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
