import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { H6 } from '@/components/organisms/typography';

const meta = {
  title: 'Organisms/Typography/h6',
  component: H6,
  tags: ['autodocs']
} satisfies Meta<typeof H6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog. !?#'
  }
};
