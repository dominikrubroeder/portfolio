import { fn } from 'storybook/test';

import { Select } from '@/components/ui/select';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const options = [
  { key: 'none', value: 'None' },
  { key: 'sm', value: 'Small' },
  { key: 'md', value: 'Medium' },
  { key: 'lg', value: 'Large' }
];

const meta = {
  title: 'Atoms/select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    trigger: { variant: 'ghost-foreground' },
    placeholder: 'Select a radius',
    label: 'Radius',
    options,
    onValueChange: fn()
  }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The shown option follows `value`, also when the setting changes elsewhere. */
export const Controlled: Story = {
  args: { value: 'lg' }
};

export const WithDefault: Story = {
  args: {
    label: 'Theme',
    placeholder: 'Select a theme',
    initialValue: 'wireframe',
    options: [
      { key: 'default', value: 'Default', isDefault: true },
      { key: 'wireframe', value: 'Wireframe' }
    ]
  }
};

export const WithIcons: Story = {
  args: {
    label: 'Appearance',
    placeholder: 'Select an appearance',
    initialValue: 'light',
    options: [
      { key: 'light', value: 'Light', icon: <span aria-hidden>☀</span> },
      { key: 'dark', value: 'Dark', icon: <span aria-hidden>☾</span> }
    ]
  }
};
