import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Markup } from '@/components/atoms/markup';

const meta = {
  title: 'Atoms/Markup',
  component: Markup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    children: 'Markup.tsx'
  }
} satisfies Meta<typeof Markup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'foreground',
    backticks: true
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Muted: Story = {
  args: {
    variant: 'muted'
  }
};

export const WithoutBackticks: Story = {
  args: {
    backticks: false
  }
};

export const Small: Story = {
  args: {
    size: 'sm'
  }
};

export const Large: Story = {
  args: {
    size: 'lg'
  }
};
