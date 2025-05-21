import { cn } from '@/lib/utils';

import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';

export function HowIWorkAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="How i work">
      <p>I like to</p>

      <Ul className={cn('mx-auto mb-5 leading-8', className)}>
        <li>
          <b className="text-foreground">Designing</b> – with care, joy,
          curiosity
        </li>
        <li>
          <b className="text-foreground">Coding</b> and
          <b className="text-foreground"> building</b> – for production
        </li>
        <li>
          <b className="text-foreground">Using Psychology </b>
          to design and build better user interfaces
        </li>
        <li>Being mindful</li>
        <li>Writing documentation</li>
        <li>Working for good Brands, Products or Services</li>
        <li>Bringing an idea from paper to production</li>
        <li>
          Pen and Paper: Fast sketching and scribbling improves visualizing
          ideas faster. We can also turn back to them later, when something else
          blocks the opportunity working on it immediately
        </li>
        <li>
          Notes: Similar to Pen and Paper work, it will help the brain to
          organize the current work on a task and summarize the outcome of it
          while being in the process. I often find myself with more clarity and
          a feeling of structure if i get stuck in a concept for too long
        </li>
      </Ul>
    </Accordion>
  );
}
