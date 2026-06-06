import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ThemeColorSetting } from '@/components/organisms/theme';

const meta = {
  title: 'Organisms/Theme/theme-color-setting',
  component: ThemeColorSetting,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ThemeColorSetting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'storybook-theme-color-setting'
  }
};
