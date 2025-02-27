import Section from '@/components/organisms/section';
import { highlightTools } from '@/components/organisms/tools/data';
import Tool from '@/components/organisms/tools/tool';

export default function Tools() {
  return (
    <Section id="tools">
      <header className="space-y-2 px-4 xl:px-16">
        <div className="inline-flex flex-wrap items-end gap-1">
          <h2 className="text-3xl font-bold text-foreground">Tools.</h2>
          <p>
            Tools help me visualizing and capturing the things we are about to
            build.
          </p>
        </div>
        <p>
          <b className="text-foreground">I use</b>
        </p>
      </header>

      <ul className="no-scrollbar overflow-hidden overflow-x-auto pb-2 whitespace-nowrap">
        {highlightTools.map((tool, index) => (
          <li
            key={tool.title}
            className="mr-8 inline-block first-of-type:ml-4 xl:first-of-type:ml-16"
          >
            <Tool tool={tool} isFirstItemInList={index === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
