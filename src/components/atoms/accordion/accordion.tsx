import {
  AccordionItem,
  AccordionItemContained,
  AccordionProps,
  getDefaultOpen
} from '@/components/atoms/accordion';

export function Accordion({
  variant,
  items,
  accordionGroupId,
  defaultOpen,
  focusView,
  accordionIcon = 'plus-minus'
}: AccordionProps) {
  if (variant === 'contained')
    return (
      <ul className="scroll-mt-responsive" id={accordionGroupId}>
        {items.map(({ title, children }, index) => (
          <li key={index + accordionGroupId}>
            <AccordionItemContained
              title={title}
              defaultOpen={getDefaultOpen({ defaultOpen, index })}
              accordionGroupId={accordionGroupId}
              focusView={focusView}
              accordionIcon={accordionIcon}
            >
              {children}
            </AccordionItemContained>
          </li>
        ))}
      </ul>
    );

  return (
    <ul className="scroll-mt-responsive space-y-6" id={accordionGroupId}>
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
    </ul>
  );
}
