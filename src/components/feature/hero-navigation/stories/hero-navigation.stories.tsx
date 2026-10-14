import { HeroNavigation } from '@/components/feature/hero-navigation';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

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
