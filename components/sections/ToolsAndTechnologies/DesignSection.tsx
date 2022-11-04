import React from 'react';
import Card from '../../ui/Card';
import { toolsAndTechnologiesData } from '../../../data';
import InlineBrand from '../../InlineBrand';
import FigmaLogoSymbol from '../../svg/FigmaLogoSymbol';
import AppleKeynoteLogoSymbol from '../../img/AppleKeynoteLogoSymbol';
import AdobePhotoshopLogoSymbol from '../../svg/AdobePhotoshopLogoSymbol';
import AdobeIllustratorLogoSymbol from '../../svg/AdobeIllustratorLogoSymbol';
import AdobeInDesignLogoSymbol from '../../svg/AdobeInDesignLogoSymbol';
import AdobeCreativeCloudLogoSymbol from '../../svg/AdobeCreativeCloudLogoSymbol';

const DesignSection: React.FC = () => {
  const designItems = toolsAndTechnologiesData.map((item, index) => {
    if (item.category.includes('design')) {
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
  });

  return (
    <section className="grid gap-4 md:flex md:flex-wrap md:items-center md:justify-between">
      <div className="md:max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Design</h3>

        <div className="grid gap-4">
          <p>
            When it comes to design,
            <InlineBrand
              title="Figma"
              logo={<FigmaLogoSymbol />}
              href="https://www.figma.com/"
            />
            is the best tool for me to create scalable user interfaces in a
            collaborative and reusable way. Also setting up Prototypes,
            Wireframes or listing information architechtures and brainstorming
            with
            <InlineBrand
              title="FigJam"
              logo={<FigmaLogoSymbol />}
              href="https://www.figma.com/figjam/"
            />
            is doable with ease.
          </p>

          <p>
            <InlineBrand
              title="Keynote"
              logo={<AppleKeynoteLogoSymbol />}
              href="https://www.apple.com/keynote/"
            />
            is used to create animated presentations with smooth transitions.
          </p>

          <p>
            I use other
            <InlineBrand
              title="Adobe Create Cloud"
              logo={<AdobeCreativeCloudLogoSymbol />}
              href="https://www.adobe.com/de/creativecloud.html"
            />
            applications like
            <InlineBrand
              logo={<AdobePhotoshopLogoSymbol />}
              href="https://www.adobe.com/de/products/photoshop.html"
            />
            <InlineBrand
              logo={<AdobeIllustratorLogoSymbol />}
              href="https://www.adobe.com/de/products/illustrator.html"
            />
            <InlineBrand
              logo={<AdobeInDesignLogoSymbol />}
              href="https://www.adobe.com/de/products/indesign.html"
            />
            for any true graphic design related tasks.
          </p>
        </div>
      </div>

      <Card>
        <div className="grid grid-cols-4 gap-4">{designItems}</div>
      </Card>
    </section>
  );
};

export default DesignSection;
