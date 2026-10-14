import { Sidebar } from '@/components/ui/sidebar';

import { ThemeSettings } from '@/components/feature/theme/theme-settings';

export function ThemeSidebar() {
  return (
    <Sidebar title="Modify">
      <ThemeSettings />
    </Sidebar>
  );
}
