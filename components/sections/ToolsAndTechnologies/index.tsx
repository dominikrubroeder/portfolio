import React from 'react';
import DevelopmentSection from './DevelopmentSection';
import EnvironmentSection from './EnvironmentSection';
import DesignSection from './DesignSection';
import EcommerceSection from './EcommerceSection';
import Section from '../Section';

const ToolsAndTechnologies: React.FC = () => {
  return (
    <Section title="Tools & Technologies.">
      <EnvironmentSection />
      <hr />
      <DevelopmentSection />
      <hr />
      <DesignSection />
      <hr />
      <EcommerceSection />
    </Section>
  );
};

export default ToolsAndTechnologies;
