import { ButtonGithub, ButtonLinkedin } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ButtonFigma } from '@/components/atoms/button/button-figma';

export function HeaderMenu() {
  return (
    <ButtonGroup minimizeSpacing className="lg:hidden">
      <ButtonFigma id="header-menu-figma" />
      <ButtonLinkedin
        id="header-menu-linkedin"
        className="hidden xs:inline-flex"
      />
      <ButtonGithub id="header-menu-github" className="hidden xs:inline-flex" />
    </ButtonGroup>
  );
}
