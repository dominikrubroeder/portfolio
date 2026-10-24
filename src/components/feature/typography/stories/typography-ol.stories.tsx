import { Ol } from '@/components/feature/typography';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Organisms/Typography/ol',
  component: Ol,
  tags: ['autodocs']
} satisfies Meta<typeof Ol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <li>Hello, world</li>
        <li>Hello, world</li>
        <li>Hello, world</li>
        <li>Hello, world</li>
        <li>Hello, world</li>
      </>
    )
  }
};
