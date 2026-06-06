'use client';

import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from '@/components/molecules/drawer';
import { cn } from '@/lib/utils';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import {
  Button,
  ButtonContact,
  ButtonGithub,
  ButtonLinkedin
} from '@/components/atoms/button';
import { useHeaderMenu } from '@/components/organisms/header';
import {
  ThemeAppearanceSelect,
  ThemeColorSetting,
  ThemeFontSizeSetting
} from '@/components/organisms/theme';
import { DialogTitle } from '@/components/molecules/dialog';
import { Ul } from '@/components/organisms/typography';

export function HeaderMenuDrawer() {
  const {
    isOpen,
    setIsOpen,
    activeSection,
    handleScrollToSection,
    currentNavigation,
    pathname
  } = useHeaderMenu();

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost-foreground"
          className={cn(isOpen && 'bg-muted')}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <EllipsisVerticalIcon
            className={cn('transition', isOpen ? 'rotate-0' : 'rotate-90')}
          />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DialogTitle className="sr-only">On this page</DialogTitle>

        <div className="space-y-4 overflow-hidden overflow-y-auto px-4 pb-4">
          <div>
            <b>On this page</b>

            <ul className="space-y-2">
              {currentNavigation?.map((item) => (
                <li key={item.href}>
                  <button
                    className={cn(
                      'flex w-full items-center justify-between gap-4 pb-2 hover:text-foreground motion-safe:transition',
                      pathname.replace('/', '') === item.href &&
                        'text-foreground',
                      item.href === activeSection && 'text-foreground'
                    )}
                    onClick={() =>
                      handleScrollToSection({
                        activeSection: item.href,
                        scrollIntoViewProps: {
                          id: item.href,
                          options: {
                            behavior: 'smooth',
                            block: 'start'
                          }
                        }
                      })
                    }
                  >
                    <span>{item.label}</span>

                    <div className="flex items-center gap-3">
                      {item.href === activeSection && (
                        <div className="mr-0.5 flex size-4 items-center justify-center rounded-full border-2 border-primary">
                          <div className="block size-2 shrink-0 rounded-full bg-primary" />
                        </div>
                      )}
                      {item.icon}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <hr />

          <div>
            <b>Quick theme settings</b>

            <ul className="grid gap-3">
              <li>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-foreground">Select appearance</span>
                  <ThemeAppearanceSelect
                    className="-mr-2"
                    menuPosition="bottom-right"
                  />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-foreground">Select color</span>
                  <ThemeColorSetting />
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-foreground">Select font size</span>
                  <ThemeFontSizeSetting />
                </div>
              </li>
            </ul>
          </div>

          <hr />

          <div className="space-y-2">
            <div>
              <b>Contact</b>
            </div>

            <Ul>
              <li>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-foreground">LinkedIn</span>
                  <ButtonLinkedin id="header-menu-drawer-linkedin" />
                </div>
              </li>

              <li>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-foreground">GitHub</span>
                  <ButtonGithub id="header-menu-drawer-github" />
                </div>
              </li>

              <li>
                <a
                  href="mailto:dominik.rubroeder@icloud.com?subject=I want to write you about..."
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-foreground">Email</span>
                  <ButtonContact
                    iconPosition="right"
                    buttonProps={{ size: 'large' }}
                  />
                </a>
              </li>
            </Ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default HeaderMenuDrawer;
