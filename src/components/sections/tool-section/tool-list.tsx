import Tool from '@/components/sections/tool-section/tool';
import MoreItemsSection from '@/components/more-items-section';
import { fetchTools } from '@/lib/tools';

export default async function ToolList() {
  const tools = await fetchTools();

  if (tools === null || tools === undefined || tools.length === 0)
    return <div>No tools listed.</div>;

  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {tools.map((tool, index) => {
          if (tool.priority === 'high')
            return (
              <li
                key={tool.title}
                className="mr-8 inline-block first-of-type:ml-4 sm:first-of-type:ml-16"
              >
                <Tool tool={tool} isFirstItemInList={index === 0} />
              </li>
            );
        })}
      </ul>

      <div className="ml-4 sm:ml-16">
        <MoreItemsSection items={tools} />
      </div>
    </>
  );
}
