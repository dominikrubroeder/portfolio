import { technologies } from '@/components/organisms/technologies/data';
import { Technology } from '@/components/organisms/technologies';
import MoreItems from '@/components/organisms/more-items';
import Container from '@/components/organisms/container';

export default function Technologies() {
  return (
    <Container htmlTag="section" id="technologies" className="space-y-8">
      <header className="space-y-6">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="text-3xl font-bold text-foreground">Technologies:</h2>
          <p className="md:leading-normal">
            Technologies are the foundation of building production ready code.
          </p>
        </div>

        <p>
          <b className="text-foreground">I use</b>
        </p>
      </header>

      <ul className="no-scrollbar space-x-8 overflow-hidden overflow-x-auto whitespace-nowrap">
        {technologies.map((item) =>
          item.children.map((nestedItem) => {
            return nestedItem.knowledge === 'Daily' ? (
              <li
                key={nestedItem.title}
                className="inline-flex first-of-type:ml-4 last-of-type:mr-8"
              >
                <Technology technology={nestedItem} group={item.group} />
              </li>
            ) : null;
          })
        )}
      </ul>

      <MoreItems
        items={technologies}
        openScrollToId="technology-list"
        closedScrollToId="technology-list-trigger"
      />
    </Container>
  );
}
