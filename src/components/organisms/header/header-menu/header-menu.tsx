import { ButtonGithub, ButtonLinkedin } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function HeaderMenu() {
  return (
    <ButtonGroup minimizeSpacing className="lg:hidden">
      <ButtonLinkedin id="header-menu-linkedin" />
      <ButtonGithub id="header-menu-github" />
    </ButtonGroup>
  );
}
