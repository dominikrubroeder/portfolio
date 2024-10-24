import Tool from '@/components/sections/tool-section/tool';
import MoreItemsSection from '@/components/more-items-section';
import { tools } from '@/components/sections/tool-section/data';

export default function ToolList() {
  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {tools.map((tool, index) => {
          if (tool.priority === 'high')
            return (
              <li
                key={tool.title}
                className="mr-8 inline-block first-of-type:ml-4 md:first-of-type:ml-16"
              >
                <Tool tool={tool} isFirstItemInList={index === 0} />
              </li>
            );
        })}
      </ul>

      <div>
        <MoreItemsSection items={tools} />
      </div>
    </>
  );
}
