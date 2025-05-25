import { cn } from '@/lib/utils';

import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';

export function HowIWorkAccordion({ className }: { className?: string }) {
  return (
    <Accordion title="How i work">
      <p>I like to</p>

      <Ul className={cn('mx-auto mb-5 leading-8', className)}>
        <li>
          Care on <b className="text-foreground">designing</b>
        </li>
        <li>
          <b className="text-foreground">Code</b> and
          <b className="text-foreground"> build</b> for production
        </li>
        <li>
          <b className="text-foreground">Using Psychology </b>
          to design and build better user interfaces
        </li>
        <li>Being mindful</li>
        <li>Writing documentation</li>
        <li>Working for good Brands, Products or Services</li>
        <li>Bring an idea from paper to production</li>
        <li>
          Work with pen and paper; Fast sketching and scribbling improves
          visualizing ideas faster. I can also turn back to them later, when
          something else blocks the opportunity working on it immediately
        </li>
        <li>
          Writing notes on a regular basis; similar to pen and paper work, it
          will help organizing my thoughts and the current work on a task and
          summarize the outcome of it – while being in the process. I often find
          myself with more clarity and a feeling of structure if i get stuck in
          a concept for too long.
        </li>
      </Ul>
    </Accordion>
  );
}
