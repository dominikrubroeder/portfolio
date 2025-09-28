import type { ButtonProps } from '@/components/atoms/button';
import { Button } from '@/components/atoms/button';

export function ButtonTextGroup({
  buttonPropsFirst,
  buttonPropsSecond
}: {
  buttonPropsFirst: ButtonProps;
  buttonPropsSecond: ButtonProps;
}) {
  return (
    <div className="flex items-center gap-2">
      <Button {...buttonPropsFirst}>{buttonPropsFirst.children}</Button>
      <Button {...buttonPropsSecond}>{buttonPropsSecond.children}</Button>
    </div>
  );
}
