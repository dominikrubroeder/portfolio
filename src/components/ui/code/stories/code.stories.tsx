import { Code } from '@/components/ui/code';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Atoms/code',
  component: Code,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'DESIGN.md'
  }
};

export const InText: Story = {
  render: () => (
    <p>
      Create a <Code>UX_PRINCIPLES.md</Code> file for guiding agents.
    </p>
  )
};
