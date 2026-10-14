import { Button } from '@/components/ui/button';

import { LogoStorybook } from '@/components/feature/logo';

import type { BaseComponentProps } from '@/lib/types';

export function ButtonStorybook({ className }: BaseComponentProps) {
  return (
    <Button
      variant="ghost-foreground"
      href="/"
      iconOnly
      label="Go to Storybook"
      size="large"
      className={className}
    >
      <LogoStorybook id="button-storybook" />
    </Button>
  );
}
