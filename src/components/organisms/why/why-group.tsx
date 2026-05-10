import { Container } from '@/components/atoms/container';
import { Why } from '@/components/organisms/why';
import { Blockquote } from '@/components/atoms/blockquote';

export function WhyGroup() {
  // Only placeholder / reminder

  return (
    <Container size="container" className="grid grid-cols-2 gap-4">
      <Why />
      <div className="space-y-4 rounded border border-t-8 border-r-8 border-t-primary border-r-primary p-8">
        <small className="text-primary">Vision</small>
        <h2>Design + Code = ❤️</h2>

        <div>
          <p>
            As todays possibilites grow and grow, it is not only about the craft
            anymore. Designers and engineers work closer together then ever,
            with the modern tools and technolgies of today – resulting in a
            system interface so why not combine the roles all together? That is
            what i want to to: design with code, and code by design; designing
            websites, shops and apps with code, make the idea come to life. its
            one craft,
          </p>

          <p>
            I'm specialized in themeable user interfaces, design systems and
            crafting appropriate front-end user experiences.
          </p>
        </div>
      </div>
      <div className="space-y-4 rounded border border-t-8 border-r-8 border-t-primary border-r-primary p-8">
        <small className="text-primary">Mission</small>
        <h2>
          "Providing great user interfaces that mirror the owners intend, vision
          and goals for the people using them."
        </h2>
      </div>
      <div className="space-y-4 rounded border border-t-8 border-r-8 border-t-primary border-r-primary p-8">
        <small className="text-primary">Values</small>
        <h2>Why am i doing design engineering?</h2>

        <div>
          <Blockquote className="mb-4">
            It's simple, i love to build user interfaces!
          </Blockquote>

          <p>
            Weather it's the colors, the style, the fonts, the design language,
            building themes or the code itself, i want to build user interfaces
            that
            <i className="ml-1">servers purpose</i>,
            <i className="ml-1">supporting the projects goals and intentions</i>
            .
          </p>
          <p>
            This can be achieved by gathering knowledge and with practise, with
            tools, with technologies and in my opinion with system thinking.
          </p>
        </div>
      </div>
    </Container>
  );
}
