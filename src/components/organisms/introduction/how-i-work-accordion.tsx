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
        <li>Be mindful</li>
        <li>Write documentation</li>
        <li>Work for good brands, products or services</li>
        <li>Bring an idea from paper to production</li>
        <li>
          Work with pen and paper; fast sketching and scribbling improves
          visualizing my ideas faster. I can also turn back to them later when
          something else blocks the opportunity working on it immediately
        </li>
        <li>
          Write notes on a regular basis; similar to work with pen and paper, it
          will help organizing my thoughts and summarize the outcome of it –
          while being in the process. I often find myself with more clarity and
          a feeling of structure if i get stuck in a concept for too long.
        </li>
      </Ul>
    </Accordion>
  );
}
