import { Ul } from '@/components/feature/typography';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Organisms/Typography/ul',
  component: Ul,
  tags: ['autodocs']
} satisfies Meta<typeof Ul>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listStyle: 'disc',
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
