'use client';

import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ArrowDownIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

import {
  Button,
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { Overlay } from '@/components/atoms/overlay';
import { useHeaderMenu } from '@/components/molecules/header-menu';
import { ThemeQuickSettings } from '@/components/organisms/theme';

export function HeaderMenu() {
  const {
    isOpen,
    setIsOpen,
    activeSection,
    handleScrollToSection,
    handleNavigation,
    currentNavigation,
    pages,
    pathname
  } = useHeaderMenu();

  return (
    <div className="relative lg:hidden">
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

      {isOpen && (
        <>
          <div className="fixed top-20 right-0 left-0 z-50 grid w-full animate-fade-down-1rem flex-wrap gap-2 border-b bg-background px-4 pt-0 pb-3 drop-shadow-xl">
            <div>
              <b>On this page</b>

              <ul className="space-y-2">
                {currentNavigation?.map((item) => (
                  <li key={item.href}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between gap-4 transition hover:text-primary',
                        pathname.replace('/', '') === item.href &&
                          'text-primary',
                        item.href === activeSection && 'text-primary'
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
                      <div className="flex items-center gap-2 transition hover:text-primary">
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

            <div>
              <b>More</b>
              <ul>
                {pages.map((item) => (
                  <li key={item.href}>
                    <button
                      className={cn(
                        'flex w-full items-center justify-between gap-4 hover:text-primary',
                        item.href === pathname && 'text-primary'
                      )}
                      onClick={() => handleNavigation({ href: item.href })}
                    >
                      <span>{item.label}</span>

                      {item.href === pathname ? (
                        <div className="flex size-4 items-center justify-center rounded-full border-2 border-primary">
                          <div className="block size-2 shrink-0 rounded-full bg-primary" />
                        </div>
                      ) : (
                        <ArrowRightIcon className="size-4" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <b>Quick theme settings</b>
              <ThemeQuickSettings animateOut={false} />
            </div>
            <div>
              <b>Contact</b>
              <div>
                <ContactButton />
                <GitHubButton />
                <LinkedInButton />
              </div>
            </div>
          </div>
          <Overlay onClick={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
}
