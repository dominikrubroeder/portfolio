import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import {
  IntroductionMyBackground,
  IntroductionPrinciples
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Hr } from '@/components/atoms/hr';

export default function IntroductionPage() {
  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h1>Introduction</h1>
          <p>
            For the past 10 years, i combined design and code into one craft for
            building user interfaces. I enjoy both abilities to allow ideas come
            to life in concept but also from a technical standpoint.
          </p>
        </Container>
      </Animate>

      <Animate delay={0.16}>
        <Container as="section" size="container-readable" className="space-y-3">
          <h2>My Journey</h2>
          <IntroductionMyBackground />
        </Container>
      </Animate>

      <Container as="section" size="container-readable" className="space-y-3">
        <h2>Education</h2>
        <TrainingAccordion />
      </Container>

      <Container as="section" size="container-readable" className="space-y-3">
        <h2>Principles</h2>
        <IntroductionPrinciples />
      </Container>

      <Hr variant="container" />
    </>
  );
}
