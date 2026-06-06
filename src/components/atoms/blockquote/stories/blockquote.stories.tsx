import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Blockquote } from '@/components/atoms/blockquote';

const meta = {
  title: 'Atoms/blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  }
};
