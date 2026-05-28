import { Container } from '@/components/organisms/layout';
import { IntroductionMyBackground, IntroductionPrinciples } from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Ul } from '@/components/atoms/ul';
import { ExternalLink } from '@/components/atoms/external-link';
import { BrandName } from '@/components/organisms/brand';
import { Blockquote } from '@/components/atoms/blockquote';
import { Hr } from '@/components/atoms/hr';
import { HeroNavigation } from '@/components/molecules/hero-navigation/hero-navigation';

export default function IntroductionPage() {
  return (
    <>
      <div className="animate-in-to-left-100">
        <Container
          as="section"
          size="container-readable"
          className="bg-background"
        >
          <h1>Introduction</h1>
          <Blockquote className="mt-3 sm:mt-5">
            Since ten years I combine design and coding into one craft for
            building user interfaces: frontend design engineering. With it,
            design comes to life in terms of look, feel and function.
          </Blockquote>
        </Container>
      </div>

      <div className="animate-in-to-left-160">
        <Container
          as="section"
          size="container-readable"
          className="bg-background"
        >
          <h2>My Journey</h2>
          <IntroductionMyBackground />
        </Container>
      </div>

      <Container
        as="section"
        size="container-readable"
        className="bg-background"
      >
        <h2>Education</h2>
        <TrainingAccordion />
      </Container>

      <Container
        as="section"
        size="container-readable"
        className="bg-background"
      >
        <h2>Work history</h2>
        <p>
          Please view my work history on
          <BrandName
            brandName="LinkedIn"
            label={
              <ExternalLink href="https://www.linkedin.com/in/dominik-rubröder-49a63817b">
                LinkedIn
              </ExternalLink>
            }
            className="ml-1.5"
          />
          .
        </p>
      </Container>

      <Container
        as="section"
        size="container-readable"
        className="bg-background"
      >
        <h2>Design Principles</h2>
        <IntroductionPrinciples />
      </Container>

      <Container
        as="section"
        size="container-readable"
        className="bg-background"
      >
        <h2>What's important to me</h2>
        <Ul listStyle="disc">
          <li>To identify a clear vision in the company</li>
          <li>A vivid communication within the team</li>
          <li>
            To see and feel that a products success is a cross-department
            success
          </li>
        </Ul>
      </Container>

      <Hr variant="container-readable" />

      <HeroNavigation hiddenLink="/introduction" />
    </>
  );
}
