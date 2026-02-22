import { Button } from '@/components/atoms/button';
import { LogoStorybook } from '@/components/atoms/logo';
import { BaseComponentProps } from '@/lib/types';

export function ButtonStorybook({ className }: BaseComponentProps) {
  return (
    <Button
      variant="ghost-foreground"
      href="/"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <LogoStorybook id="button-storybook" />
    </Button>
  );
}
