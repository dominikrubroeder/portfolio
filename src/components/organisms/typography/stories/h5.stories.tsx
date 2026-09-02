import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { H5 } from '@/components/organisms/typography';

const meta = {
  title: 'Organisms/Typography/h5',
  component: H5,
  tags: ['autodocs']
} satisfies Meta<typeof H5>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog. !?#'
  }
};
