import {
  AccordionItem,
  AccordionItemContained,
  AccordionProps,
  getDefaultOpen
} from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';

export function Accordion({
  variant,
  buttonVariant,
  items,
  accordionGroupId,
  defaultOpen,
  focusView,
  accordionIcon = 'plus-minus'
}: AccordionProps) {
  if (variant === 'contained')
    return (
      <Ul className="scroll-mt-responsive space-y-0" id={accordionGroupId}>
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
    <Ul className="scroll-mt-responsive space-y-3" id={accordionGroupId}>
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
