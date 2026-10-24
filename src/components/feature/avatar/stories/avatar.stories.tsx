import { Avatar } from '@/components/feature/avatar';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Atoms/avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 44,
    height: 44,
    as: 'Image'
  }
};

export const Lightbox: Story = {
  args: {
    width: 96,
    height: 96,
    variant: 'lightbox'
  }
};
