import type { ReactNode } from 'react';

export function ThemeSettingSection({
  title,
  description,
  children
}: {
  title: string;
  description?: string | ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="grid">
        <b>{title}</b>
        {description && (
          <small className="text-muted-foreground">{description}</small>
        )}
      </div>

      <div className="space-y-6 rounded-xl border p-6 in-data-[theme=wireframe]:rounded-(--sketch-button-radius)! in-data-[theme=wireframe]:border-[1.5px] in-data-[theme=wireframe]:border-foreground">
        {children}
      </div>
    </div>
  );
}
