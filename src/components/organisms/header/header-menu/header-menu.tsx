'use client';

import { ArrowDownIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

import { Button, ContactButton, GitHubButton, LinkedInButton } from '@/components/atoms/button';
import { Overlay } from '@/components/atoms/overlay';
import { ButtonGroup } from '@/components/molecules/button-group';
import { useHeaderMenu } from '@/components/organisms/header';
import { ThemeAppearanceSetting, ThemeColorSetting, ThemeFontSizeSetting } from '@/components/organisms/theme';

export function HeaderMenu() {
  const {
    isOpen,
    setIsOpen,
    activeSection,
    handleScrollToSection,
    currentNavigation,
    pathname
  } = useHeaderMenu();

  return (
    <div className="relative lg:hidden">
      <ButtonGroup className="gap-0">
        <ContactButton buttonProps={{ size: 'large' }} />

        <GitHubButton />

        <LinkedInButton />

        <Button
          variant="ghost"
          className={cn(isOpen && 'bg-muted')}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <EllipsisVerticalIcon
            className={cn('transition', isOpen ? 'rotate-90' : 'rotate-0')}
          />
          <span className="sr-only">Open menu</span>
        </Button>
      </ButtonGroup>

      {isOpen && (
        <>
          <div className="fixed top-20 right-0 left-0 z-50 w-full animate-fade-down-1rem flex-wrap space-y-6 overflow-hidden overflow-y-auto border-b bg-background px-4 py-3 drop-shadow-xl">
            <div>
              <b>On this page</b>

              <ul className="space-y-2">
                {currentNavigation?.map((item) => (
                  <li key={item.href}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between gap-4 pb-2 transition hover:text-foreground',
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
                      <div className="flex items-center gap-2 transition hover:text-foreground">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>

                      {item.href === activeSection ? (
                        <div className="mr-0.5 flex size-4 items-center justify-center rounded-full border-2 border-primary">
                          <div className="block size-2 shrink-0 rounded-full bg-primary" />
                        </div>
                      ) : (
                        <ArrowDownIcon className="size-5" />
                      )}
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
                    <ThemeAppearanceSetting
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
          </div>

          <Overlay onClick={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
}
