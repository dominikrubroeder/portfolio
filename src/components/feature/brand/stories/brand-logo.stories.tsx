import { BrandLogo } from '@/components/feature/brand';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Organisms/Brand/brand-logo',
  component: BrandLogo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'storybook-brand-logo',
    brand: 'Figma'
  }
};
