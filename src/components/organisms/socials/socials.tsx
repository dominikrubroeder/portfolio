import { socials } from '@/components/organisms/socials/data';
import { Container } from '@/components/atoms/container';
import Brand from '@/components/atoms/brand';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/atoms/button';

export default function Socials() {
  return (
    <Container tag="section" id="socials" className="space-y-8 md:pb-4">
      <header className="space-y-6">
        <h2 className="space-x-2 text-5xl font-bold text-foreground">
          <span>Social accounts</span>
          <span className="text-muted-foreground">
            You can see my code or my social presence on
          </span>
        </h2>
      </header>

      <div className="flex items-center gap-4">
        <Button variant="primary">
          <span className="sr-only">Chevron right</span>
          <ChevronRightIcon className="size-5" />
        </Button>

        <ul className="no-scrollbar overflow-hidden overflow-x-auto pb-2 whitespace-nowrap">
          {socials.map((social) => (
            <li
              key={social.title}
              className="group mr-8 inline-block first-of-type:ml-4 last-of-type:mr-8"
            >
              <Brand
                brand={social.title}
                className="h-16 w-auto"
                aria-label={`${social.title} logo`}
              />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
