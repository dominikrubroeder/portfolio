import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Accordion } from '@/components/molecules/accordion';

const meta = {
  title: 'Molecules/accordion',
  component: Accordion,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionContained: Story = {
  args: {
    variant: 'contained',
    items: [
      {
        title: 'The quick brown fox jumps over the lazy dog',
        children: (
          <div>
            The quick brown fox jumps over the lazy dog and some more
            placeholder text – where you can also be creative.
          </div>
        )
      },
      {
        title: 'The quick brown fox sleeps',
        children: (
          <div>
            The quick brown fox jumps over the lazy dog and some more
            placeholder text – where you can also be creative.
          </div>
        )
      },
      {
        title: 'The quick brown fox is hungry',
        children: (
          <div>
            The quick brown fox jumps over the lazy dog and some more
            placeholder text – where you can also be creative.
          </div>
        )
      }
    ],
    accordionGroupId: 'accordion-storybook',
    className: 'w-(--container-readable)'
  }
};
