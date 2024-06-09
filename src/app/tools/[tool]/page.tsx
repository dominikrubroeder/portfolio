import ControlBar from '@/components/navigation/control-bar/control-bar';
import { redirect } from 'next/navigation';
import { tools } from '@/components/sections/tool-section/data';
import { formatTitle } from '@/lib/helpers';

export default function ToolPage({ params }: { params: { tool: string } }) {
  const tool = tools.find(
    (currentTool) => formatTitle(currentTool.title) === formatTitle(params.tool)
  );

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
