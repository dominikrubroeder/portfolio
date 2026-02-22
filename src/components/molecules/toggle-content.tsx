'use client';

import { ReactNode, useCallback, useState } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';

export function ToggleContent({
  label,
  buttonPropsFirst,
  buttonPropsSecond,
  className,
  children,
  id
}: {
  label?: ReactNode;
  buttonPropsFirst?: Partial<Pick<ButtonProps, 'variant'>>;
  buttonPropsSecond?: ButtonProps;
  className?: string;
  children: ReactNode;
  id: string;
}) {
  const [show, setShow] = useState<boolean>(false);
  const { scrollIntoView } = useScrollIntoView();

  const onClick = useCallback(() => {
    scrollIntoView({
      id: `toggle-content-${id}`,
      options: { block: 'start', behavior: 'smooth' }
    });
    setShow((prevState) => !prevState);
  }, []);

  return (
    <div
      className={cn('scroll-mt-responsive space-y-8 pt-4', className)}
      id={`toggle-content-${id}`}
    >
      <ButtonGroup>
        <Button onClick={onClick} {...buttonPropsFirst}>
          <span className="sr-only">{show ? 'Hide' : 'Close'}</span>
          <div>
            {show ? (
              <MinusIcon className="size-5" />
            ) : (
              <PlusIcon className="size-5" />
            )}
          </div>
        </Button>

        <Button
          variant="ghost-foreground"
          onClick={onClick}
          {...buttonPropsSecond}
        >
          {label}
        </Button>
      </ButtonGroup>

      <div
        className={cn(
          'invisible hidden h-0 opacity-0 motion-safe:animate-fade-up-1rem',
          show && 'visible block h-auto opacity-100'
        )}
      >
        {children}
      </div>
    </div>
  );
}
