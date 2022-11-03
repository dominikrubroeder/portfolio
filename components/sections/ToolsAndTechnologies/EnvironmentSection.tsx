import React from 'react';
import InlineBrand from '../../InlineBrand';
import AppleLogo from '../../svg/AppleLogo';
import VisualStudioCodeLogo from '../../svg/VisualStudioCodeLogo';
import Card from '../../ui/Card';
import { toolsAndTechnologiesData } from '../../../data';

const EnvironmentSection: React.FC = () => {
  return (
    <section className="grid gap-4 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Environment</h3>

        <p>
          I am using
          <InlineBrand title="VS Code" logo={<VisualStudioCodeLogo />} />
          for
          <InlineBrand title="Mac" logo={<AppleLogo />} />
          for all code editing on the web.
        </p>
      </div>

      <Card>
        <div className="grid gap-2">
          {toolsAndTechnologiesData.map((item) => {
            if (item.category.includes('environment')) {
              return <div key={item.title}>{item.logoSymbol}</div>;
            }
          })}
        </div>
      </Card>
    </section>
  );
};

export default EnvironmentSection;
