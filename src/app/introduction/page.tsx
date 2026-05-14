import { Container } from '@/components/organisms/layout';
import {
  IntroductionMyBackground,
  IntroductionPrinciples
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Hr } from '@/components/atoms/hr';
import { Ul } from '@/components/atoms/ul';
import { ExternalLink } from '@/components/atoms/external-link';
import { BrandName } from '@/components/organisms/brand';
import { Blockquote } from '@/components/atoms/blockquote';

export default function IntroductionPage() {
  return (
    <>
      <div className="[html[data-theme=default]_&]:animate-to-left [html[data-theme=default]_&]:[animation-delay:100ms]">
        <Container as="section" size="container-readable">
          <h1>Introduction</h1>
          <Blockquote className="mt-3 sm:mt-5">
            For the past 10 years I combined design and code into one craft for
            building user interfaces. I enjoy both abilities to make ideas come
            to life in concept but also from a technical standpoint.
          </Blockquote>
        </Container>
      </div>

      <div className="[html[data-theme=default]_&]:animate-to-left [html[data-theme=default]_&]:[animation-delay:160ms]">
        <Container as="section" size="container-readable">
          <h2>My Journey</h2>
          <IntroductionMyBackground />
        </Container>
      </div>

      <Container as="section" size="container-readable">
        <h2>Education</h2>
        <TrainingAccordion />
      </Container>

      <Container as="section" size="container-readable">
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

      <Container as="section" size="container-readable">
        <h2>Principles</h2>
        <IntroductionPrinciples />
      </Container>

      <Container as="section" size="container-readable">
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

      <Hr variant="container" />
    </>
  );
}
