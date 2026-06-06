import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BadgeHrGroup } from '@/components/molecules/badge-hr-group';

const meta = {
  title: 'Molecules/badge-hr-group',
  component: BadgeHrGroup,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BadgeHrGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badgeProps: [{ children: '2026' }]
  }
};
