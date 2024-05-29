import ControlBar from '@/components/navigation/control-bar/control-bar';
import { redirect } from 'next/navigation';
import { fetchTool } from '@/lib/tools';

export default async function ToolPage({
  params
}: {
  params: { tool: string };
}) {
  const tool = await fetchTool(params.tool);

  if (tool === null || tool === undefined) redirect('/');

  const sections = [
    {
      id: 'projects',
      label: `Projects with ${tool?.title}`,
      icon: 'DocumentDuplicateIcon'
    },
    { id: 'experience', label: 'Experience', icon: 'CheckCircleIcon' },
    { id: 'usage', label: 'Usage', icon: 'ArrowUturnRightIcon' },
    { id: 'related-usage', label: 'Related usage', icon: 'PlusIcon' }
  ];

  return (
    <>
      <section className="flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="text-8xl font-bold text-theme-contrary">
            {tool.title}
          </h1>
        </div>
      </section>

      <ControlBar
        sections={sections}
        collapse={false}
        leftControlAction="Back"
        rightControlAction="Avatar"
      />
    </>
  );
}
