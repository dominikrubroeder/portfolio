import {
  AccordionItem,
  AccordionItemContained,
  AccordionProps,
  getDefaultOpen
} from '@/components/molecules/accordion/index';
import { Ul } from '@/components/organisms/typography';
import { cn } from '@/lib/utils';

export function Accordion({
  variant,
  buttonVariant,
  items,
  accordionGroupId,
  defaultOpen,
  focusView,
  accordionIcon = 'plus-minus',
  className
}: AccordionProps) {
  if (variant === 'contained')
    return (
      <Ul
        className={cn('scroll-mt-responsive space-y-0', className)}
        id={accordionGroupId}
      >
        {items.map(({ title, children }, index) => (
          <li key={index + accordionGroupId}>
            <AccordionItemContained
              title={title}
              defaultOpen={getDefaultOpen({ defaultOpen, index })}
              accordionGroupId={accordionGroupId}
              focusView={focusView}
              accordionIcon={accordionIcon}
              buttonVariant={buttonVariant}
            >
              {children}
            </AccordionItemContained>
          </li>
        ))}
      </Ul>
    );

  return (
    <Ul
      className={cn('scroll-mt-responsive space-y-3', className)}
      id={accordionGroupId}
    >
      {items.map(({ title, children }, index) => (
        <li key={index + accordionGroupId}>
          <AccordionItem
            title={title}
            defaultOpen={getDefaultOpen({ defaultOpen, index })}
            accordionIcon={accordionIcon}
          >
            {children}
          </AccordionItem>
        </li>
      ))}
    </Ul>
  );
}
