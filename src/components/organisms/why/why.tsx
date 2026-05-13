import { Blockquote } from '@/components/atoms/blockquote';
import { HeroBox } from '@/components/molecules/hero-box';

export function Why() {
  return (
    <HeroBox
      overline="Motivation: Reason why"
      title="Why am i doing design engineering?"
    >
      <div className="max-w-(--container-readable)">
        <Blockquote className="mb-4">
          It's simple, i love to build user interfaces!
        </Blockquote>

        <p>
          Whether it's the style, the colors, the fonts, the design language, a
          theme or the code, i want to build user interfaces, that
          <i> servers purpose supporting the projects goals and intentions</i>.
        </p>

        <p>
          With a design system that feeds the user interface appropriately,
          streamlined processes and design-development workflows that help
          people getting things done as comfortably as possible.
        </p>
      </div>
    </HeroBox>
  );
}
