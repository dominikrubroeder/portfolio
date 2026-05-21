import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Accordion } from '@/components/molecules/accordion';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AccordionContained: Story = {
  args: {
    variant: 'contained',
    items: [
      {
        title: 'Accordion Item 1',
        children: <div>Accordion Item 1 Content</div>
      },
      {
        title: 'Accordion Item 2',
        children: <div>Accordion Item 2 Content</div>
      },
      {
        title: 'Accordion Item 3',
        children: <div>Accordion Item 3 Content</div>
      }
    ],
    accordionGroupId: 'accordion-storybook',
    className: 'min-w-sm'
  }
};
