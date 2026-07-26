import { Blockquote } from '@/components/atoms/blockquote';
import { Badge } from '@/components/atoms/badge';

export function Why() {
  return (
    <div className="space-y-3">
      <Blockquote variant="foreground" className="my-0 mb-4">
        It's simple, i love to build user interfaces!
      </Blockquote>

      <p>
        From concept to code – it is the whole spectrum that drives my passion
        for this job. Here are some tags i associate with design engineering:
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge>Design</Badge>
        <Badge>Code</Badge>
        <Badge>Color</Badge>
        <Badge>Design System</Badge>
        <Badge>Psychology</Badge>
        <Badge>Cognition</Badge>
        <Badge>Perception</Badge>
        <Badge>Architecture</Badge>
        <Badge>Components</Badge>
        <Badge>Concept</Badge>
        <Badge>Research</Badge>
        <Badge>Testing</Badge>
        <Badge>Fun</Badge>
        <Badge>Expressiveness</Badge>
        <Badge>Branding</Badge>
        <Badge>Typography</Badge>
        <Badge>Accessibility</Badge>
        <Badge>Creativity</Badge>
        <Badge>Iconography</Badge>
        <Badge>Animations</Badge>
        <Badge>Transitions</Badge>
        <Badge>Motion Design</Badge>
        <Badge>Microinteractions</Badge>
        <Badge>Interaction Design</Badge>
        <Badge>Principles</Badge>
        <Badge>Values</Badge>
        <Badge>Patterns</Badge>
        <Badge>User Experience</Badge>
        <Badge>Satisfaction</Badge>
        <Badge>Prototyping</Badge>
        <Badge>Creativity</Badge>
      </div>

      <p className="hidden">
        Using design and code is my daily driver. Everything can be approached
        as concept, in design or with code – as long as the idea and message are
        transported correctly and their goals are achieved.
      </p>

      {/**
      <p>
        Whether it's the style, the colors, the fonts, the design language, a
        theme or the code, i want to build user interfaces that builds solutions
        for problems, with the rules of design, engineering and psychology.
        Branding
      </p>

      <p>Supporting the projects goals and intentions.</p>

      <p>
        With a design system that feeds the user interface, streamlined
        processes and design-development workflows that help people get things
        done accordingly to the tasks requirements.
      </p>
      */}
    </div>
  );
}
