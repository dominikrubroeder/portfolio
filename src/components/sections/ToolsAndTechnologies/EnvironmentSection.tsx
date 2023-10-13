import React from 'react';
import InlineBrand from '../../InlineBrand';
import AppleLogo from '../../svg/AppleLogo';
import VisualStudioCodeLogo from '../../svg/VisualStudioCodeLogo';
import Card from '../../ui/Card';
import { toolsAndTechnologiesData } from '../../../data';
import BoxedLogo from '../BoxedLogo';

const EnvironmentSection: React.FC = () => {
  return (
    <section className="grid gap-4 md:flex md:flex-wrap md:items-center md:justify-between">
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
          {toolsAndTechnologiesData.map((item, index) => {
            if (item.category.includes('environment')) {
              return (
                <BoxedLogo
                  key={index}
                  title={item.title}
                  logoSymbol={item.logoSymbol}
                  href={item.href}
                />
              );
            }
          })}
        </div>
      </Card>
    </section>
  );
};

export default EnvironmentSection;
