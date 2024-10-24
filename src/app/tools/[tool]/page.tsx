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
      icon: 'DocumentDuplicateIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: 'CheckCircleIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'usage',
      label: 'Usage',
      icon: 'ArrowUturnRightIcon',
      className: '',
      defaultActive: false
    },
    {
      id: 'related-usage',
      label: 'Related usage',
      icon: 'PlusIcon',
      className: '',
      defaultActive: false
    }
  ];

  return (
    <>
      <section className="flex h-[calc(100dvh-5rem)] items-center justify-center">
        <div className="max-w-max">
          <h1 className="text-8xl font-bold text-foreground">{tool.title}</h1>
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
