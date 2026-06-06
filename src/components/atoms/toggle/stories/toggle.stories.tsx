import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { Toggle } from '@/components/atoms/toggle';

const meta = {
  title: 'Atoms/toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    isEnabled: false,
    label: 'Toggle Label'
  }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    isEnabled: false
  }
};

export const Enabled: Story = {
  args: {
    isEnabled: true
  }
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    isEnabled: false
  }
};
