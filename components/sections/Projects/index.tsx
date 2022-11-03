import React from 'react';
import { toolsAndTechnologiesData } from '../../../data';
import InlineBrand from '../../InlineBrand';
import AppleLogo from '../../svg/AppleLogo';
import VisualStudioCodeLogo from '../../svg/VisualStudioCodeLogo';
import Card from '../../ui/Card';
import DevelopmentSection from '../ToolsAndTechnologies/DevelopmentSection';

const Projects: React.FC = () => {
  return (
    <div className="mx-auto mt-64 grid w-full max-w-5xl gap-32">
      <header className="sticky top-0 z-50 flex w-full gap-16 bg-theme-base/30 py-4 backdrop-blur-sm lg:hidden">
        <h2 className="text-3xl font-bold text-theme-contrary">Projects.</h2>

        <span className="relative top-0 -right-4 h-full w-full flex-1 rounded-full bg-gradient-to-t from-apple-purple to-apple-pink "></span>
      </header>

      <section className="grid gap-4 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold text-theme-contrary">
            Environment
          </h3>

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

      <hr />

      <DevelopmentSection />

      <hr />

      <section className="flex items-center justify-between gap-4">
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold text-theme-contrary">Design</h3>

          <div className="grid gap-4">
            <p>
              When it comes to design,
              <span className="text-theme-contrary">Figma</span> is the best
              tool for me to create scalable user interfaces in a collaborative
              and reusable way. Also setting up Prototypes, Wireframes or
              listing information architechtures with
              <span className="text-theme-contrary">FigJam</span> is nice and
              clean.
            </p>

            <p>
              <span className="text-theme-contrary">Keynote</span> is used to
              create animated presentations with smooth transitions.
            </p>

            <p>
              The
              <span className="text-theme-contrary">Adobe Create Cloud</span>
              applications are used to work with any graphic design related
              tasks.
            </p>
          </div>
        </div>

        <Card>
          <div className="grid">
            <div>Figma</div>
            <div>Keynote</div>
            <div>Adobe XD</div>
            <div>Adobe Photoshop</div>
            <div>Adobe Illustrator</div>
            <div>Adobe InDesign</div>
          </div>
        </Card>
      </section>

      <section className="flex items-center justify-between gap-4">
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold text-theme-contrary">Ecommerce</h3>
          <p>
            <span className="text-theme-contrary">Shopware</span> is the best
            tool for designers creating scalable user interfaces in a
            collaborative way.
          </p>
        </div>

        <Card>
          <div className="grid">
            <div>Shopware</div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
