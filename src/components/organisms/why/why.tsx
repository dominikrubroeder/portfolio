import { Blockquote } from '@/components/atoms/blockquote';
import { Container } from '@/components/atoms/container';

export function Why() {
  return (
    <Container id="why" className="space-y-4">
      <h2>Why am i doing this job?</h2>

      <div>
        <Blockquote className="mb-4">
          It's simple, i love to build user interfaces!
        </Blockquote>

        <p>
          Weather it's the style, the colors, the fonts, the design language, a
          theme or the code, i want to build user interfaces,
          <i className="ml-1">that servers purpose</i>,
          <i className="ml-1">supporting the projects goals and intentions</i>.
        </p>
        <p>
          This can be achieved by gathering knowledge and practise! In bigger
          teams: with teamwork, tools, technologies and in my opinion with
          system thinking.
        </p>

        <p>
          Processes should be streamlined as far as possible, creativity should
          be allowed and possible wherever it's needed. There should be room to
          improve and fine tune to be production ready. Nothing is more
          frustrating than a half-ready product or service that is released to
          the user too soon. This holds also true for the complicated timeline
          of today. Quality needs to be ensured – the time should be taken and
          invested to review this. <i>Especially </i>
          in the time of today.
        </p>

        <p>
          Also – carefully, in wise usage, with AI. Talking about AI, the
          discussion weather it's good or bad practise basically comes along
          with the decision weather it's helpful for the current task or not.
          The ethics and personal preference also play a crucial role here. So
          nonetheless if you use AI or not, the end result is what's important,
          to build an output that matches and satisfies the desired outcome.
        </p>
      </div>
    </Container>
  );
}
