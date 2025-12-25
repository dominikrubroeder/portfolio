import type { ReactNode } from 'react';
import { ComponentBaseProps } from '@/lib/types';

export interface AccordionProps {
  variant: 'default' | 'contained';
  items: AccordionItemProps[];
  accordionGroupId: string;
  /** `defaultOpen` lets you open an `AccordionItem` by default. Pass a `boolean` to default open the first element, or pass a `number` to indicate which item should be default open based on the index. */
  defaultOpen?: boolean | number;
  /** `focusView` lets you define the scroll position of the `contained` variant, when the `AccordionItemContained` closes.
   * - `start` scrolls to the top of the `accordionGroupId`
   * - `center` scrolls to the center of the `accordionGroupId`
   * */
  focusView?: 'start' | 'center';
}

export interface AccordionItemProps
  extends Pick<AccordionProps, 'defaultOpen'>,
    ComponentBaseProps {
  title: string | ReactNode;
  children: ReactNode;
  /** `offsetInnerContent` moves inner content slightly to the right. */
  offsetInnerContent?: boolean;
}

export interface AccordionItemContainedProps
  extends Pick<AccordionProps, 'accordionGroupId' | 'focusView'>,
    AccordionItemProps {}
