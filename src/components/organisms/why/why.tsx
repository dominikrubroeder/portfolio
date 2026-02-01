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
          Weather it's the colors, the style, the fonts, the design language,
          building themes or the code itself, i want to build user interfaces
          that
          <i className="ml-1">servers purpose</i>,
          <i className="ml-1">supporting the projects goals and intentions</i>.
        </p>
        <p>
          This can be achieved by gathering knowledge and with practise, with
          tools, with technologies and in my opinion with system thinking.
        </p>
      </div>
    </Container>
  );
}
