import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Button } from '@/components/atoms/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Button'
  }
};

export const ContainedMuted: Story = {
  args: {
    variant: 'contained-muted',
    children: 'Button'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button'
  }
};

export const GhostMuted: Story = {
  args: {
    variant: 'ghost-muted',
    children: 'Button'
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Button'
  }
};

export const TextMuted: Story = {
  args: {
    variant: 'text-muted',
    children: 'Button'
  }
};
