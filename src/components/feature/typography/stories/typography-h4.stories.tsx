import { H4 } from '@/components/feature/typography';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Organisms/Typography/h4',
  component: H4,
  tags: ['autodocs']
} satisfies Meta<typeof H4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog. !?#'
  }
};
