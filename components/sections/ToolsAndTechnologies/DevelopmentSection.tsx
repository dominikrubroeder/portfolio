import React, { useState } from 'react';
import Card from '../../ui/Card';
import InlineBrand from '../../InlineBrand';
import Button from '../../ui/Button';
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import NextJsLogoSymbol from '../../svg/NextJsLogoSymbol';
import TailwindLogoSymbol from '../../svg/TailwindLogoSymbol';
import TypeScriptLogo from '../../svg/TypeScriptLogo';
import FramerMotionLogo from '../../svg/FramerMotionLogo';
import { toolsAndTechnologiesData } from '../../../data';
import HeadlessUiLogoSymbol from '../../svg/HeadlessUiLogoSymbol';
import TailwindUiLogo from '../../svg/TailwindUiLogo';
import HeadlessUiLogo from '../../svg/HeadlessUiLogo';

const DevelopmentSection: React.FC = () => {
  const [showFullSection, setShowFullSection] = useState(false);

  return (
    <section>
      <div className="flex w-full max-w-5xl items-start justify-between gap-16">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-theme-contrary">
            Development
          </h2>

          <div className="grid gap-4">
            <p>
              My go-to tech stack and setup for web project is very clear to me:
              <InlineBrand title="Next.js" logo={<NextJsLogoSymbol />} />,
              <InlineBrand title="Tailwind CSS" logo={<TailwindLogoSymbol />} />
              , and
              <InlineBrand title="TypeScript" logo={<TypeScriptLogo />} />. I am
              also familiar with further development tools and technologies.
            </p>

            <Button
              variant="text"
              text="Show more to setup information"
              icon={
                <ChevronRightIcon
                  className={`h-5 w-5 transition ${
                    showFullSection ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              }
              className="justify-start"
              onClick={() =>
                setShowFullSection((previousState) => !previousState)
              }
            />
          </div>
        </div>

        <Card>
          <div className="grid grid-cols-4 gap-2">
            {toolsAndTechnologiesData.map((item) => {
              if (item.category.includes('development')) {
                return <div key={item.title}>{item.logoSymbol}</div>;
              }
            })}
          </div>
        </Card>
      </div>

      {showFullSection && (
        <div className="my-16 grid gap-16">
          <div className="flex animate-fadeUp items-center justify-between gap-8">
            <div className="grid w-full max-w-lg gap-4">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  UI libraries:
                </span>
                UI libraries helps to kickstart your project with pre-build and
                ready-to-use components provided by the maintainer.
              </p>

              <p>
                Depeding on the project needs i&apos;d like to to use
                <InlineBrand
                  title="Tailwind UI"
                  logo={<TailwindLogoSymbol />}
                  href="https://tailwindui.com/"
                />
                for this purpose. An even more lightweight and smaller,
                compressed UI library is
                <InlineBrand
                  title="Headless UI"
                  logo={<HeadlessUiLogoSymbol />}
                />
                which focuses on mostly functionality only. It is &quot;more
                barebone&quot; so to say.
              </p>

              <p>
                Another largly known UI component library is
                <InlineBrand title="Material UI" /> or also known as MUI.
              </p>
            </div>

            <div className="grid gap-2">
              <TailwindUiLogo />
              <HeadlessUiLogo />
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4">
            <p className="animate-fadeUp">
              <span className="mb-1 block font-bold text-theme-contrary">
                Animations:
              </span>
              <InlineBrand title="Framer Motion" logo={<FramerMotionLogo />} />
              makes adding animations and transitions to
              <InlineBrand title="React.js" /> applications easy and yet
              powerfull for complex animations and transitions.
            </p>

            <p className="animate-fadeUp">
              For simple animations CSS animations can be used within any
              project without any other tooling required. Tailwind CSS also
              supports creating custom CSS animations in their
              tailwind.config.js file with the keyframes prop.
            </p>
          </div>

          <div className="grid animate-fadeUp gap-4">
            <p>
              <span className="mb-1 block font-bold text-theme-contrary">
                Version control:
              </span>
              <InlineBrand title="Framer Motion" logo={<FramerMotionLogo />} />
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

          <div className="grid animate-fadeUp gap-4">
            <p>
              <span className="mb-1 block font-bold text-theme-contrary">
                Frameworks:
              </span>
              <InlineBrand title="Framer Motion" logo={<FramerMotionLogo />} />
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
      )}

      {showFullSection && (
        <Button
          variant="text"
          text={`Hide more to setup information`}
          icon={<ChevronUpIcon className="h-5 w-5" />}
          className="justify-start"
          onClick={() => setShowFullSection((previousState) => !previousState)}
        />
      )}
    </section>
  );
};

export default DevelopmentSection;
