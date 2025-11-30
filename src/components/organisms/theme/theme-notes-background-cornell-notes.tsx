'use client';

import { useTheme } from '@/components/organisms/theme/theme-context';

export function ThemeNotesBackgroundCornellNotes() {
  const { theme } = useTheme();

  if (theme.key !== 'notes') return null;

  return (
    <div
      className="fixed inset-0 z-10 overflow-auto bg-background"
      style={{
        backgroundImage:
          'repeating-linear-gradient(transparent, transparent 31px, var(--border) 31px, var(--border) 32px)'
      }}
    >
      {/* Left Cornell sidebar */}
      <div className="pointer-events-none fixed top-0 bottom-0 left-0 w-[10%] border-r-2 border-gray-400" />
    </div>
  );
}
