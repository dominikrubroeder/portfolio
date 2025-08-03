'use client';

import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Button,
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { useHeaderMenu } from '@/components/molecules/header-menu';
import { ThemeQuickSettings } from '@/components/organisms/theme';

export function HeaderMenu() {
  const {
    isOpen,
    setIsOpen,
    handleScrollToSection,
    handleNavigation,
    currentNavigation,
    pathname
  } = useHeaderMenu();

  // TODO: Mark active section

  return (
    <div className="relative lg:hidden">
      <Button
        variant="ghost"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <EllipsisVerticalIcon
          className={cn('transition', isOpen ? 'rotate-90' : 'rotate-0')}
        />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed top-20 right-0 left-0 z-50 grid w-full animate-fade-down-1rem flex-wrap gap-2 border-b bg-background px-4 pt-0 pb-3 drop-shadow-xl">
          <div>
            <b>On this page</b>
            <ul className="space-y-1">
              {currentNavigation?.map((item) => (
                <li key={item.href}>
                  <button
                    className={cn(
                      'flex items-center gap-2',
                      pathname.replace('/', '') === item.href && 'text-primary'
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
                    <ArrowDownIcon className="size-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <b>More</b>
            <ul>
              <li>
                <button
                  className={cn(
                    'flex items-center gap-2',
                    pathname === '/' && 'text-primary'
                  )}
                  onClick={() => handleNavigation({ href: '/' })}
                >
                  {pathname === '/' ? (
                    <CircleIcon className="size-4" />
                  ) : (
                    <ArrowRightIcon className="size-4" />
                  )}
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  className={cn(
                    'flex items-center gap-2',
                    pathname === '/frontend-vision-ui' && 'text-primary'
                  )}
                  onClick={() =>
                    handleNavigation({ href: '/frontend-vision-ui' })
                  }
                >
                  <ArrowRightIcon className="size-4" />
                  <span>Frontend Vision UI</span>
                </button>
              </li>
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
      )}
    </div>
  );
}
