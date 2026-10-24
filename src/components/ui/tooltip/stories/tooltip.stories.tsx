import { ArrowUpIcon } from '@heroicons/react/16/solid';

import { Tooltip } from '@/components/ui/tooltip';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Atoms/tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Scroll to the top of the page',
    render: <button type="button" className="interactive p-3" />,
    children: <ArrowUpIcon className="size-5" />
  }
};
