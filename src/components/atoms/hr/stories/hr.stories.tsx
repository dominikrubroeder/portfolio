import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hr } from '@/components/atoms/hr';

const meta = {
  title: 'Atoms/hr',
  component: Hr,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Hr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'container'
  }
};
