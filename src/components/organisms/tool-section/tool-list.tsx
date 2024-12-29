import Tool from '@/components/organisms/tool-section/tool';
import MoreItemsSection from '@/components/organisms/more-items-section';
import {
  highlightTools,
  tools
} from '@/components/organisms/tool-section/data';

export default function ToolList() {
  return (
    <>
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
    </>
  );
}
