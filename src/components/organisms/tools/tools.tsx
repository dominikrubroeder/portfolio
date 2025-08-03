import { Button } from '@/components/atoms/button';
import { AllTools, mainTools } from '@/components/organisms/tools';

export function Tools() {
  return (
    <div className="scroll-mt-24 space-y-8" id="tools">
      <div className="space-y-6">
        <h2>
          Tools
          <span className="ml-2 font-medium text-muted-foreground">
            help to visualize, communicate and support building the application
            we create. I use
          </span>
        </h2>

        <ul className="-ml-4 space-y-1">
          {mainTools.map((tool) => (
            <li key={tool.name}>
              <div className="inline-flex items-center gap-4">
                <Button
                  variant="ghost"
                  href={tool.href}
                  target="_blank"
                  title={`Open ${tool.name} website`}
                  rel="noopener noreferrer"
                  className="p-4 [&>svg]:size-12"
                >
                  {tool.logo}
                  <span className="sr-only">Open {tool.name}</span>
                </Button>

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
