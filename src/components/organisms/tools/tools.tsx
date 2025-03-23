import { Tool } from '@/components/organisms/tools';
import type { Tools } from '@/components/organisms/tools/types';
import { Container } from '@/components/atoms/container';
import MoreItems from '@/components/organisms/more-items';
import { getApiUrl } from '@/lib/api';

async function getTools() {
  const res = await fetch(`${getApiUrl()}/api/tools`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tools data');
  }

  return res.json();
}

export default async function Tools() {
  const data = await getTools();
  const highlightTools: Tools = data.highlightTools;
  const tools: Tools = data.tools;

  if (highlightTools.length === 0 || tools.length === 0) return null;

  return (
    <Container htmlTag="section" id="tools" className="space-y-8">
      <header className="space-y-6 px-4">
        <div className="space-y-4 lg:inline-flex lg:flex-wrap lg:items-end lg:gap-4 lg:space-y-0">
          <h2 className="text-3xl font-bold text-foreground">Tools:</h2>
          <p className="md:leading-normal">
            Tools help me visualizing and capturing the things we are about to
            build.
          </p>
        </div>

        <p>
          <b className="text-foreground">I use</b>
        </p>
      </header>

      <ul className="no-scrollbar space-x-8 overflow-hidden overflow-x-auto whitespace-nowrap">
        {highlightTools.map((item) =>
          item.children.map((nestedItem) => (
            <li
              key={nestedItem.title}
              className="inline-flex first-of-type:ml-4 last-of-type:mr-8"
            >
              <Tool tool={nestedItem} group={item.group} />
            </li>
          ))
        )}
      </ul>

      <MoreItems
        items={tools}
        openScrollToId="tool-list"
        closedScrollToId="tool-list-trigger"
      />
    </Container>
  );
}
