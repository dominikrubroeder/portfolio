'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/button';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';

export function ButtonBack({
  label,
  withBackIcon
}: {
  /** `label` allows you to add a custom label text to the `back-button` component.
   *
   * Default value: "Back"
   * */
  label?: string;
  withBackIcon?: boolean;
}) {
  const { back } = useRouter();

  return (
    <Button
      variant="contained-muted"
      onClick={back}
      aria-label="Navigate back to your previous page"
      title="Navigate back to your previous page"
    >
      <span className="sr-only">Navigate back to your previous page</span>
      {withBackIcon && <ArrowLeftIcon />}
      {label ?? 'Back'}
    </Button>
  );
}
