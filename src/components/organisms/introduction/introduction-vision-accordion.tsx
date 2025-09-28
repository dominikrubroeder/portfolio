import { Accordion } from '@/components/atoms/accordion';
import { Blockquote } from '@/components/atoms/blockquote';
import Link from '@/components/atoms/link';

export function IntroductionVisionAccordion() {
  return (
    <Accordion title="More about my vision">
      <div className="mb-8 space-y-4">
        <Blockquote>
          When the idea and the vision is clear, you can build the best product
          possible, with the right people, and the right technology.
        </Blockquote>

        <div>
          <h3>Animations and transitions</h3>

          <p>
            Smooth animations and transitions that support the user&apos;s
            behaviour and provide guidance should feel interactive, yet stable.
            Supporting people to achieve their goals and intentions on the site
            seamlessly. Microinteractions can help to add some joy and good-feel
            to the user interface.
          </p>

          <ul className="mt-2 ml-4 list-disc space-y-4">
            <li>
              <div>
                <span>See</span>
                <Link
                  href="https://animations.dev/"
                  title="Open Animations on the Web, by Emil Kowalski"
                  aria-label="Open Animations on the Web, by Emil Kowalski"
                >
                  Animations on the Web, by Emil Kowalski
                </Link>
              </div>
            </li>
            <li>
              <span>See</span>
              <Link
                href="https://www.nngroup.com/articles/microinteractions/"
                title="Open Animations on the Web, by Emil Kowalski"
                aria-label="Open Animations on the Web, by Emil Kowalski"
              >
                Microinteractions in User Experience, by NN/g
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <hr />
        </div>

        <div className="space-y-2">
          <p>
            <b className="text-foreground">Further links</b>
          </p>

          <ul className="ml-4 list-disc space-y-4">
            <li>
              <div className="space-x-1">
                <span>See</span>
                <Link
                  href="https://lawsofux.com"
                  title="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
                  aria-label="Open Laws of UX from Jon Yablonski about psychological principles for UX and Design"
                  className="ml-0"
                >
                  Psychology and design principles, by Jon Yablonski
                </Link>
              </div>
            </li>
            <li>
              <div className="space-x-1">
                <span>See</span>
                <Link
                  href="https://nextjs.org/docs/app/building-your-application/deploying/production-checklist"
                  title="Open production checklist on the Next.js documenation"
                  aria-label="Open production checklist on the Next.js documenation"
                  className="ml-0"
                >
                  Production checklist on Next.js
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Accordion>
  );
}
