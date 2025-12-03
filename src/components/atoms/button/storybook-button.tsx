import { Button } from '@/components/atoms/button';
import { StorybookLogo } from '@/components/atoms/logo';
import { ComponentBaseProps } from '@/lib/types';

export function StorybookButton({ className }: ComponentBaseProps) {
  return (
    <Button
      variant="ghost"
      href="/"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <StorybookLogo />
    </Button>
  );
}
