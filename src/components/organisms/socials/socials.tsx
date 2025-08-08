import { Button } from '@/components/atoms/button';
import { mainSocials } from '@/components/organisms/socials';

export function Socials() {
  return (
    <div className="scroll-mt-24 space-y-8" id="socials">
      <header>
        <h2>
          Social accounts
          <span className="ml-2 font-medium text-muted-foreground">
            You can see my social presence on
          </span>
        </h2>
      </header>

      <ul className="-ml-4 space-y-1">
        {mainSocials.map((social) => (
          <li key={social.name}>
            <div className="inline-flex items-center gap-4">
              <Button
                variant="ghost"
                href={social.href}
                target="_blank"
                title={`Open ${social.name} website`}
                className="p-4 [&>svg]:size-12"
                rel="noopener noreferrer"
              >
                {social.logo}
                <span className="sr-only">Open {social.name}</span>
              </Button>

              <h3 className="mb-0 space-x-1">
                <span>{social.name}</span>
                <span className="font-medium text-muted-foreground">
                  {social.description}
                </span>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
