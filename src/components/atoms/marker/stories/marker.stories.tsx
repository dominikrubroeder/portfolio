import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Marker } from '@/components/atoms/marker';

const meta = {
  title: 'Atoms/marker',
  component: Marker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Marker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Hello, world'
  }
};

export const YellowAnimated: Story = {
  args: {
    variant: 'yellow',
    children: 'Hello, world'
  }
};

export const RedAnimated: Story = {
  args: {
    variant: 'red',
    children: 'Hello, world'
  }
};

export const GreenAnimated: Story = {
  args: {
    variant: 'green',
    children: 'Hello, world'
  }
};

export const PurpleAnimated: Story = {
  args: {
    variant: 'purple',
    children: 'Hello, world'
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Hello, world',
    animate: false
  }
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    children: 'Hello, world',
    animate: false
  }
};

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Hello, world',
    animate: false
  }
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Hello, world',
    animate: false
  }
};

export const Purple: Story = {
  args: {
    variant: 'purple',
    children: 'Hello, world',
    animate: false
  }
};
