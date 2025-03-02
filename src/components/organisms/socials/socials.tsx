import Section from '@/components/organisms/section';
import { socials } from '@/components/organisms/socials/data';
import { Social } from '@/components/organisms/socials';

export default function Socials() {
  return (
    <Section id="socials" className="md:pb-4">
      <header className="space-y-6 px-4 xl:px-16">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="text-3xl font-bold text-foreground">
            Social accounts:
          </h2>
          <p className="md:leading-normal">
            You can see my code or my social presence on
          </p>
        </div>
      </header>

      <ul className="no-scrollbar overflow-hidden overflow-x-auto pb-2 whitespace-nowrap">
        {socials.map((social) => (
          <li
            key={social.title}
            className="group mr-8 inline-block first-of-type:ml-4 xl:first-of-type:ml-16"
          >
            <Social social={social} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
