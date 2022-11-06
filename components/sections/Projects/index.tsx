import React from 'react';
import Accordion from '../../ui/Accordion';
import Section from '../Section';

const Projects: React.FC = () => {
  return (
    <Section title="Projects." alignment="center">
      <div className="grid gap-4">
        <Accordion
          title="IU universtiy"
          subline="Projects"
          variant="contained"
          href="/projects/iu-university"
        >
          <p>Testing content</p>
        </Accordion>

        <Accordion
          title="frontendmentor.io"
          variant="contained"
          subline="Projects"
        >
          <p>Testing content</p>
        </Accordion>

        <Accordion
          title="Work"
          subline="Projects"
          variant="contained"
          iconText="Link text"
        >
          <p>Testing content</p>
        </Accordion>
      </div>
    </Section>
  );
};

export default Projects;
