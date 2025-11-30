import { Accordion } from '@/components/atoms/accordion';
import { Ul } from '@/components/atoms/ul';

export function IntroductionHowIWorkAccordion() {
  return (
    <Accordion title="Work ethic, how i work">
      <Ul headline="I like to" listStyle="disc">
        <li>
          <b className="text-foreground">Care</b> on designing
        </li>
        <li>
          <b className="text-foreground">Code</b> and
          <b className="text-foreground"> build</b> for production applications
        </li>
        <li>
          <b className="text-foreground">Using psychology </b>
          to design and build better user interfaces
        </li>
        <li>
          <b className="text-foreground">Design</b> in system
        </li>
        <li>Be mindful</li>
        <li>Write documentation</li>
        <li>Work for good brands, products or services</li>
        <li>Bring an idea from paper to production</li>
        <li>
          Work with pen and paper; fast sketching and scribbling improves
          visualizing my ideas faster. Plus, I can also turn back to them later
          when something else blocks the opportunity working on it immediately
        </li>
        <li>
          Write notes on a regular basis; similar to work with pen and paper, it
          will help organizing my thoughts, plus summarize the outcome of it
          while being in the process. I often find myself with more clarity and
          a feeling of structure if i get stuck in a concept for too long
        </li>
        <li>
          Have a look on the latest trends and news in the tech space/design
          area on a regular basis
        </li>
        <li>
          Bring the latest trends together with core design principles and
          psychological patterns
        </li>
      </Ul>
    </Accordion>
  );
}
