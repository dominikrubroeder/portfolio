import { technologies } from '@/components/organisms/technologies/data';
import MoreItems from '@/components/organisms/more-items';
import { Container } from '@/components/atoms/container';
import { Marker } from '@/components/atoms/marker';
import Brand from '@/components/atoms/brand';
import { ToggleContent } from '@/components/organisms/toggle-content';

export default function Technologies() {
  return (
    <Container tag="section" id="technologies" className="space-y-8">
      <ul className="no-scrollbar space-x-8 overflow-hidden overflow-x-auto whitespace-nowrap">
        {technologies.map((item) =>
          item.children.map((nestedItem) => {
            return (
              nestedItem.knowledge === 'Daily' && (
                <li
                  key={nestedItem.title}
                  className="inline-flex first-of-type:ml-4 last-of-type:mr-8"
                >
                  <Brand
                    brand={nestedItem.title}
                    className="h-16 w-auto transition group-hover:scale-105"
                    aria-label={`${nestedItem.title} logo`}
                  />
                </li>
              )
            );
          })
        )}
      </ul>

      <header className="space-y-6">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="max-w-[70rem] space-x-2 text-5xl leading-[1.2] font-bold text-foreground">
            <span>Technologies</span>
            <span className="text-muted-foreground">
              are the foundation or writing
              <Marker animate className="mx-2 pr-3 pl-1 text-black/90">
                production-ready
              </Marker>
              code.
              <span className="mx-2 text-foreground">
                In other words, that&#39;s how we build our application!
              </span>
              I use
            </span>
          </h2>
        </div>
      </header>

      <ToggleContent>
        <MoreItems
          items={technologies}
          openScrollToId="technology-list"
          closedScrollToId="technology-list-trigger"
        />
      </ToggleContent>
    </Container>
  );
}
