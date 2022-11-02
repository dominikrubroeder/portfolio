import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import { toolsAndTechnologiesData } from '../data';
import InlineBrand from './InlineBrand';
import AppleLogo from './svg/AppleLogo';
import FramerMotionLogo from './svg/FramerMotionLogo';
import NextJsLogo from './svg/NextJsLogo';
import TailwindCssLogoSymbol from './svg/TailwindCssLogoSymbol';
import TypeScriptLogo from './svg/TypeScriptLogo';
import VisualStudioCodeLogo from './svg/VisualStudioCodeLogo';
import Button from './ui/Button';
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
                  return <div key={item.title}>{item.logoSymbol}</div>;
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

            <div className="grid gap-4">
              <p>
                My go-to tech stack and setup for web project is very clear to
                me:
                <InlineBrand title="Next.js" logo={<NextJsLogo />} />,
                <InlineBrand
                  title="Tailwind CSS"
                  logo={<TailwindCssLogoSymbol />}
                />
                , and
                <InlineBrand title="TypeScript" logo={<TypeScriptLogo />} />. I
                am also familiar with further development tools and
                technologies.
              </p>

              <Button variant="blank" text="Show more to setup information" />

              <div className="grid gap-1">
                <p>
                  <span className="mb-1 block font-bold text-theme-contrary">
                    Animations:
                  </span>
                  <InlineBrand
                    title="Framer Motion"
                    logo={<FramerMotionLogo />}
                  />
                  makes adding animations and transitions to
                  <InlineBrand title="React.js" /> applications easy and yet
                  powerfull for complex animations and transitions.
                </p>

                <p>
                  For simple animations CSS animations can be used within any
                  project without any other tooling required. Tailwind CSS also
                  supports creating custom CSS animations in their
                  tailwind.config.js file with the keyframes prop.
                </p>
              </div>
            </div>
          </div>

          <Card>
            <div className="grid gap-2">
              {toolsAndTechnologiesData.map((item) => {
                if (item.category.includes('development')) {
                  return <div key={item.title}>{item.logoSymbol}</div>;
                }
              })}
            </div>
          </Card>
        </section>

        <section className="flex items-center justify-between gap-4">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-theme-contrary">Design</h2>

            <div className="grid gap-4">
              <p>
                When it comes to design,
                <span className="text-theme-contrary">Figma</span> is the best
                tool for me to create scalable user interfaces in a
                collaborative and reusable way. Also setting up Prototypes,
                Wireframes or listing information architechtures with
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
