import { Animate, AnimationsProvider } from '@/components/ui/animate';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Atoms/animate',
  component: Animate,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    direction: 'up',
    children: <p>Content reveals once when it enters the viewport.</p>
  }
} satisfies Meta<typeof Animate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {
  render: (args) => (
    <AnimationsProvider enabled>
      <Animate {...args} />
    </AnimationsProvider>
  )
};

/** Animations off: the content is in its final state at once, with no movement. */
export const Off: Story = {
  render: (args) => (
    <AnimationsProvider enabled={false}>
      <Animate {...args} />
    </AnimationsProvider>
  )
};
