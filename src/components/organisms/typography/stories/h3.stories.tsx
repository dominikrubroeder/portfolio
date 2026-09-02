import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { H3 } from '@/components/organisms/typography';

const meta = {
  title: 'Organisms/Typography/h3',
  component: H3,
  tags: ['autodocs']
} satisfies Meta<typeof H3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog. !?#'
  }
};
