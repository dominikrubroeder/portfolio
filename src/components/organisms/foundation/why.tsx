import { Blockquote } from '@/components/atoms/blockquote';

export function Why() {
  return (
    <div className="space-y-3">
      <b>Why am i doing design engineering?</b>

      <Blockquote variant="foreground">
        It's simple, i love to build user interfaces! And everything around
        frontend, design, UX and even psychology related topics.
      </Blockquote>

      <p>
        Whether it's the style, the colors, the fonts, the design language, a
        theme or the code, i want to build user interfaces that
        <i> servers purpose, supporting the projects goals and intentions</i>.
      </p>

      <p>
        With a design system that feeds the user interface appropriately,
        streamlined processes and design-development workflows that help people
        get things done appropriately to the task.
      </p>
    </div>
  );
}
