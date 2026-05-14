import { ReactNode } from 'react';

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

      <div className="space-y-6 border p-6 [html[data-theme=default]_&]:rounded-xl">
        {children}
      </div>
    </div>
  );
}
