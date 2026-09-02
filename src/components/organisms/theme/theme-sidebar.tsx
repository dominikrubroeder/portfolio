import { Sidebar } from '@/components/organisms/sidebar';
import { ThemeSettings } from '@/components/organisms/theme/theme-settings';

export function ThemeSidebar() {
  return (
    <Sidebar title="Modify">
      <ThemeSettings />
    </Sidebar>
  );
}
