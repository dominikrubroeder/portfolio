import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { H2 } from '@/components/organisms/typography';

const meta = {
  title: 'Organisms/Typography/h2',
  component: H2,
  tags: ['autodocs']
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog. !?#'
  }
};
