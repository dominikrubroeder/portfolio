import type { ReactNode } from 'react';
import { BaseComponentProps } from '@/lib/types';
import { ButtonProps } from '@/components/atoms/button';

export interface AccordionProps {
  variant: 'default' | 'contained';
  buttonVariant?: Pick<ButtonProps, 'variant'>;
  items: AccordionItemProps[];
  accordionGroupId: string;
  /** `defaultOpen` lets you open an `AccordionItem` by default. Pass a `boolean` to default open the first element, or pass a `number` to indicate which item should be default open based on the index. */
  defaultOpen?: boolean | number;
  /** `focusView` lets you define the scroll position of the `contained` variant, when the `AccordionItemContained` closes.
   * - `start` scrolls to the top of the `accordionGroupId`
   * - `center` scrolls to the center of the `accordionGroupId`
   * */
  focusView?: 'start' | 'center';
  accordionIcon?: 'plus-minus' | 'chevron' | 'arrow-right';
  className?: string;
}

export interface AccordionItemProps
  extends
    Pick<AccordionProps, 'defaultOpen' | 'accordionIcon'>,
    BaseComponentProps {
  title: string | ReactNode;
  children: ReactNode;
  /** `offsetInnerContent` moves inner content slightly to the right. */
  offsetInnerContent?: boolean;
  href?: string;
}

export interface AccordionItemContainedProps
  extends
    Pick<
      AccordionProps,
      'accordionGroupId' | 'focusView' | 'accordionIcon' | 'buttonVariant'
    >,
    AccordionItemProps {}
