import React from 'react';
import InlineBrand from '../../InlineBrand';
import AppleLogo from '../../svg/AppleLogo';
import VisualStudioCodeLogo from '../../svg/VisualStudioCodeLogo';
import Card from '../../ui/Card';
import { toolsAndTechnologiesData } from '../../../data';

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
                <a
                  key={item.title}
                  className="interactive invisible flex h-12 w-12 animate-fadeUp items-center justify-center rounded-lg bg-apple-gray-4 p-1 opacity-0 md:h-8 md:w-8"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  {item.logoSymbol}
                </a>
              );
            }
          })}
        </div>
      </Card>
    </section>
  );
};

export default EnvironmentSection;
