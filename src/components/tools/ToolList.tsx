import { getTools } from '@/lib';
import Tool from '@/components/tools/Tool';
import ToolMoreOn from '@/components/tools/ToolMoreOn';

export default async function ToolList() {
  const tools = await getTools();

  if (tools === null || tools === undefined || tools.length === 0)
    return <div>No tools listed.</div>;

  return (
    <>
      <ul className="no-scrollbar overflow-hidden overflow-x-auto whitespace-nowrap pb-2">
        {tools.map((tool) => {
          if (tool.priority === 'high')
            return (
              <li
                key={tool.title}
                className="group inline-block mr-8 first-of-type:ml-16"
              >
                <Tool tool={tool} />
              </li>
            );
        })}
      </ul>

      <div className="ml-16">
        <ToolMoreOn tools={tools} />
      </div>
    </>
  );
}