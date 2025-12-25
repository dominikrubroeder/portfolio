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
  focusView
}: AccordionProps) {
  if (variant === 'contained')
    return (
      <ul id={accordionGroupId}>
        {items.map(({ title, children }, index) => (
          <li key={index + accordionGroupId}>
            <AccordionItemContained
              title={title}
              defaultOpen={getDefaultOpen({ defaultOpen, index })}
              accordionGroupId={accordionGroupId}
              focusView={focusView}
            >
              {children}
            </AccordionItemContained>
          </li>
        ))}
      </ul>
    );

  return (
    <ul className="space-y-6" id={accordionGroupId}>
      {items.map(({ title, children }, index) => (
        <li key={index + accordionGroupId}>
          <AccordionItem
            title={title}
            defaultOpen={getDefaultOpen({ defaultOpen, index })}
          >
            {children}
          </AccordionItem>
        </li>
      ))}
    </ul>
  );
}
