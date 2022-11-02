import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import { toolsAndTechnologiesData } from '../data';
import InlineBrand from './InlineBrand';
import AppleLogo from './svg/AppleLogo';
import NextJsLogo from './svg/NextJsLogo';
import TailwindCssLogoSymbol from './svg/TailwindCssLogoSymbol';
import TypeScriptLogo from './svg/TypeScriptLogo';
import VisualStudioCodeLogo from './svg/VisualStudioCodeLogo';
import Card from './ui/Card';

const ToolsAndTechnologies: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <motion.div
        className="w-4 rounded-xl bg-gradient-to-t from-apple-purple to-apple-pink"
        style={{ scaleY }}
      />

      <div className="mt-64 grid gap-64">
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-theme-contrary">
              Environment
            </h2>

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
                  return <div key={item.title}>{item.logo}</div>;
                }
              })}
            </div>
          </Card>
        </section>

        <section className="flex items-center justify-between gap-4">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-theme-contrary">
              Development
            </h2>
            <p>
              My go-to tech stack and setup for web project is very clear to me:
              <InlineBrand title="Next.js" logo={<NextJsLogo />} />,
              <InlineBrand
                title="Tailwind CSS"
                logo={<TailwindCssLogoSymbol />}
              />
              , and
              <InlineBrand title="TypeScript" logo={<TypeScriptLogo />} />. I am
              also familiar with further development tools and technologies.
            </p>
          </div>

          <Card>
            <div className="grid">
              <div>Next.js</div>
              <div>Tailwind CSS</div>
              <div>TypeScript</div>
              <div>Framer Motion</div>
              <div>Tailwind UI</div>
              <div>Headless UI</div>
              <div>React.js</div>
              <div>Vue.js</div>
              <div>Heroicons</div>
              <div>Storybook</div>
              <div>Prettier</div>
              <div>GitHub</div>
              <div>GitLab</div>
              <div>Vercel</div>
            </div>
          </Card>
        </section>

        <section className="flex items-center justify-between gap-4">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-theme-contrary">Design</h2>
            <p>
              <span className="text-theme-contrary">Figma</span> is the best
              tool for designers creating scalable user interfaces in a
              collaborative way.
            </p>
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
            <h2 className="text-3xl font-bold text-theme-contrary">
              Ecommerce
            </h2>
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
    </div>
  );
};

export default ToolsAndTechnologies;
