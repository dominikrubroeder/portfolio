import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HeroNavigation } from '@/components/molecules/hero-navigation';

const meta = {
  title: 'Molecules/hero-navigation',
  component: HeroNavigation,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeroNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
