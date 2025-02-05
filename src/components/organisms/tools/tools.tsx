import Section from '@/components/organisms/section';
import { highlightTools, tools } from '@/components/organisms/tools/data';
import MoreItemsSection from '@/components/organisms/more-items-section';
import Tool from '@/components/organisms/tools/tool';

export default function Tools() {
  return (
    <Section id="tools">
      <header className="space-y-2 px-4 xl:px-16">
        <h2 className="text-foreground text-3xl font-bold">Tools</h2>
        <h3>
          Tools help me building, visualizing and capturing the things we want.
          Therefore i use:
        </h3>
      </header>

      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {highlightTools.map((tool, index) => (
          <li
            key={tool.title}
            className="mr-8 inline-block first-of-type:ml-4 xl:first-of-type:ml-16"
          >
            <Tool tool={tool} isFirstItemInList={index === 0} />
          </li>
        ))}
      </ul>

      <MoreItemsSection items={tools} />
    </Section>
  );
}
