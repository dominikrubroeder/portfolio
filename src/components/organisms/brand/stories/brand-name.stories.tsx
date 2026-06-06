import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandName } from '@/components/organisms/brand';
import { ExternalLink } from '@/components/atoms/external-link';

const meta = {
  title: 'Organisms/Brand/brand-name',
  component: BrandName,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BrandName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandName: 'Figma',
    label: <ExternalLink href="https://www.figma.com">Figma</ExternalLink>
  }
};
