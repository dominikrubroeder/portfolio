import { Blockquote } from '@/components/atoms/blockquote';

export function Why() {
  return (
    <div className="space-y-3">
      <Blockquote variant="foreground" className="my-0 mb-4">
        It's simple, i love to build user interfaces!
      </Blockquote>

      <p>
        And everything around frontend, design, UX and psychology related
        topics. Combining them is a powerful toolkit to create good, appropriate
        and flexible user interfaces.
      </p>

      <p>
        Whether it's the style, the colors, the fonts, the design language, a
        theme or the code, i want to build user interfaces that builds on top of
        defined requirements, with the rules of design, branding and psychology.
      </p>

      <p>Supporting the projects goals and intentions.</p>

      <p>
        With a design system that feeds the user interface appropriately,
        streamlined processes and design-development workflows that help people
        get things done appropriately to the task.
      </p>
    </div>
  );
}
