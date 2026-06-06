import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Ul } from '@/components/organisms/typography';

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
