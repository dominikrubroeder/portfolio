import { HeroBox } from '@/components/molecules/hero-box';
import { Blockquote } from '@/components/atoms/blockquote';

export function Motivation() {
  return (
    <HeroBox
      overline="Motivation: Reason why"
      title="Why am i doing design engineering?"
      className="mx-auto max-w-(--container-readable)"
    >
      <div>
        <Blockquote className="mb-4">
          It's simple, i love to build user interfaces!
        </Blockquote>
        <p>
          Whether it's the style, the colors, the fonts, the design language, a
          theme or the code, i want to build user interfaces that
          <i> servers purpose, supporting the projects goals and intentions</i>.
        </p>

        <p>
          Processes should be streamlined as far as possible, there should be
          room for creativity wherever it's needed. There should be room to
          improve user interfaces to be production ready. Nothing is more
          frustrating than a half-ready product or service that is released to
          the user too soon.
        </p>

        <p>
          Quality needs to be ensured - the time should be taken and invested to
          keep it alive. <i>Especially</i> in the fast-paced timelines of today.
        </p>
      </div>
    </HeroBox>
  );
}
