import { GitHubButton, LinkedInButton } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function HeaderMenu() {
  return (
    <ButtonGroup minimizeSpacing className="lg:hidden">
      <LinkedInButton />
      <GitHubButton />
    </ButtonGroup>
  );
}
