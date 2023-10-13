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
import MuiLogoSymbol from '../../svg/MuiLogoSymbol';
import CssLogoSymbol from '../../svg/CssLogoSymbol';
import GitHubLogo from '../../svg/GitHubLogo';
import GitLabLogo from '../../svg/GitLabLogo';
import ReactLogoSymbol from '../../svg/ReactLogoSymbol';
import HeroiconsLogo from '../../svg/HeroiconsLogo';
import HeroiconsLogoSymbol from '../../svg/HeroiconsLogoSymbol';
import VueJsLogo from '../../svg/VueJsLogo';
import SvelteLogoSymbol from '../../svg/SvelteLogoSymbol';
import GatsbyLogoSymbol from '../../svg/GatsbyLogoSymbol';
import QwikLogoSymbol from '../../svg/QwikLogoSymbol';
import AstroLogoSymbol from '../../svg/AstroLogoSymbol';
import SwiftUILogoSymbol from '../../img/SwiftUILogoSymbol';
import FontAwesomeLogoSymbol from '../../svg/FontAwesomeLogoSymbol';
import BoxedLogo from '../BoxedLogo';

const DevelopmentSection: React.FC = () => {
  const [showFullSection, setShowFullSection] = useState(false);

  const toolsAndTechnologies: {
    developmentTools: JSX.Element[];
    uiLibraries: JSX.Element[];
    animationLibraries: JSX.Element[];
    versionControlTools: JSX.Element[];
    frameworks: JSX.Element[];
  } = {
    developmentTools: [],
    uiLibraries: [],
    animationLibraries: [],
    versionControlTools: [],
    frameworks: []
  };

  toolsAndTechnologiesData.forEach((item, index) => {
    if (item.category.includes('development')) {
      toolsAndTechnologies.developmentTools.push(
        <BoxedLogo
          key={index}
          title={item.title}
          logoSymbol={item.logoSymbol}
          href={item.href}
        />
      );

      const CardElement = (
        <Card key={item.title}>
          <InlineBrand
            title={item.title}
            logo={item.logoSymbol}
            href={item.href}
            interactive
          />
        </Card>
      );

      if (item.tags.includes('ui-library'))
        toolsAndTechnologies.uiLibraries.push(CardElement);
      if (item.tags.includes('animation'))
        toolsAndTechnologies.animationLibraries.push(CardElement);
      if (item.tags.includes('version-control'))
        toolsAndTechnologies.versionControlTools.push(CardElement);
      if (item.tags.includes('development-framework'))
        toolsAndTechnologies.frameworks.push(CardElement);
    }
  });

  return (
    <section>
      <div className="grid min-h-[24rem] gap-4 md:flex md:flex-wrap md:items-center md:justify-between">
        <div className="md:max-w-lg">
          <h2 className="text-3xl font-bold text-theme-contrary">
            Development
          </h2>

          <div className="grid gap-4">
            <p>
              My go-to tech stack and setup for web project is very clear to me:
              <InlineBrand
                title="Next.js"
                logo={<NextJsLogoSymbol />}
                href="https://nextjs.org/"
              />
              ,
              <InlineBrand
                title="Tailwind CSS"
                logo={<TailwindLogoSymbol />}
                href="https://tailwindcss.com/"
              />
              , and
              <InlineBrand
                title="TypeScript"
                logo={<TypeScriptLogo />}
                href="https://www.typescriptlang.org/"
              />
              . I am also familiar with further development tools and
              technologies.
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

        {!showFullSection && (
          <Card>
            <div className="grid grid-cols-4 gap-4">
              {toolsAndTechnologies.developmentTools}
            </div>
          </Card>
        )}
      </div>

      {showFullSection && (
        <div className="my-16 grid gap-16">
          <div className="grid animate-fadeUp gap-4 md:flex md:items-center md:justify-between md:gap-8">
            <div className="grid w-full gap-4 md:md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  UI Libraries:
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
                  href="https://headlessui.com/"
                />
                which focuses on mostly functionality only. It is &quot;more
                barebone&quot; so to say.
              </p>

              <p>
                Another largly known UI component library is
                <InlineBrand
                  title="Material UI"
                  logo={<MuiLogoSymbol />}
                  href="https://mui.com/"
                />
                or also known as MUI in short.
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              {toolsAndTechnologies.uiLibraries}
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4 md:flex md:items-center md:justify-between md:gap-8">
            <div className="grid w-full gap-4 md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  Animations:
                </span>
                Small, suttle and consistent animations are drastically improve
                the user experience on any application out there. And crucial
                for finetuning modern applications.
              </p>

              <p>
                <InlineBrand
                  title="Framer Motion"
                  logo={<FramerMotionLogo />}
                  href="https://www.framer.com/motion/"
                />
                makes adding animations and transitions to
                <InlineBrand
                  title="React.js"
                  logo={<ReactLogoSymbol />}
                  href="https://reactjs.org/"
                />
                applications easy and yet powerfull for complex animations and
                transitions.
              </p>

              <p>
                For simple animations
                <InlineBrand
                  title="CSS 3"
                  logo={<CssLogoSymbol />}
                  href="https://www.w3schools.com/css/css3_animations.asp"
                />
                animations can be used within any project without any other
                tooling required. Tailwind CSS also supports creating custom CSS
                animations in their tailwind.config.ts file with the keyframes
                prop.
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              {toolsAndTechnologies.animationLibraries}
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4 md:flex md:items-center md:justify-between md:gap-8">
            <div className="grid w-full gap-4 md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  Version control:
                </span>
                I am using
                <InlineBrand
                  title="GitHub"
                  logo={<GitHubLogo />}
                  href="https://github.com/dominikrubroeder"
                />
                for all my personal repositories. At work,
                <InlineBrand
                  title="GitLab"
                  logo={<GitLabLogo />}
                  href="https://about.gitlab.com/"
                />
                was used most of the time.
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              {toolsAndTechnologies.versionControlTools}
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4 md:gap-8">
            <div className="grid w-full gap-2 md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  Frameworks:
                </span>
                <InlineBrand
                  title="React.js"
                  logo={<ReactLogoSymbol />}
                  href="https://reactjs.org/"
                />
                is the JavaScript frontend framework to use.
              </p>

              <p>
                I have some experience with
                <InlineBrand
                  title="Vue.js"
                  logo={<VueJsLogo />}
                  href="https://vuejs.org/"
                />
                ,
                <InlineBrand
                  title="Gatsby.js"
                  logo={<GatsbyLogoSymbol />}
                  href="https://www.gatsbyjs.com/"
                />
                and
                <InlineBrand
                  title="SwiftUI"
                  logo={<SwiftUILogoSymbol />}
                  href="https://developer.apple.com/xcode/swiftui/"
                />
                for mobile app development on Apple platforms.
              </p>

              <p>
                And I also want to have a closer look on
                <InlineBrand
                  title="Svelte.js"
                  logo={<SvelteLogoSymbol />}
                  href="https://svelte.dev/"
                />
                ,
                <InlineBrand
                  title="Astro.js"
                  logo={<AstroLogoSymbol />}
                  href="https://astro.build/"
                />
                or
                <InlineBrand
                  title="Qwik.js"
                  logo={<QwikLogoSymbol />}
                  href="https://qwik.builder.io/"
                />
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              {toolsAndTechnologies.frameworks}
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4 md:flex md:items-center md:justify-between md:gap-8">
            <div className="grid w-full gap-4 md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  Icons:
                </span>
                <InlineBrand
                  logo={<HeroiconsLogoSymbol />}
                  title="Heroicons"
                  href="https://heroicons.com/"
                />
                is a great icon library by the makers of Tailwind CSS and it
                seemlessly integrates within any project setup, especially when
                using Tailwind CSS.
              </p>

              <p>
                <InlineBrand
                  logo={<MuiLogoSymbol />}
                  title="MUI Icons"
                  href="https://mui.com/material-ui/material-icons/"
                />
                is another large icon libary for development and design tasks.
                <InlineBrand
                  logo={<FontAwesomeLogoSymbol />}
                  title="Font Awesome"
                  href="https://fontawesome.com/"
                />
                can also be considered to use.
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              <Card>
                <InlineBrand
                  logo={<HeroiconsLogo />}
                  href="https://heroicons.com/"
                />
              </Card>

              <Card>
                <InlineBrand
                  logo={<FontAwesomeLogoSymbol />}
                  title="Font Awesome"
                  href="https://fontawesome.com/"
                />
              </Card>

              <Card>
                <InlineBrand
                  logo={<MuiLogoSymbol />}
                  title="MUI Icons"
                  href="https://mui.com/material-ui/material-icons/"
                />
              </Card>
            </div>
          </div>

          <div className="grid animate-fadeUp gap-4 md:flex md:items-center md:justify-between md:gap-8">
            <div className="grid w-full gap-4 md:max-w-lg">
              <p>
                <span className="mb-1 block font-bold text-theme-contrary">
                  Other:
                </span>
                Prettier, Jest, Storybook
              </p>
            </div>

            <div className="grid grid-cols-cardBrands gap-4">
              <Card>
                <InlineBrand
                  logo={<HeroiconsLogo />}
                  href="https://heroicons.com/"
                />
              </Card>
            </div>
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
