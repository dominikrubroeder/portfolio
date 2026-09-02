import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandLink } from '@/components/organisms/brand';
import { getTools } from '@/components/organisms/tools';

const meta = {
  title: 'Organisms/Brand/brand-link',
  component: BrandLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BrandLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandLogoId: 'storybook-brand-link-figma',
    brand: getTools({ names: ['Figma'] })?.[0]
  }
};
