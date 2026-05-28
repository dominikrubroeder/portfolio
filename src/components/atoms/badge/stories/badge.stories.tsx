import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from '@/components/atoms/badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'Badge'
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Foreground: Story = {
  args: {
    variant: 'foreground'
  }
};

export const Muted: Story = {
  args: {
    variant: 'muted'
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Medium: Story = {
  args: {
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};
