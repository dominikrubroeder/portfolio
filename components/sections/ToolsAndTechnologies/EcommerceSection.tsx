import React from 'react';
import InlineBrand from '../../InlineBrand';
import ShopwareLogoSymbol from '../../svg/ShopwareLogoSymbol';
import Card from '../../ui/Card';

const EcommerceSection: React.FC = () => {
  return (
    <section className="grid gap-4 md:flex md:flex-wrap md:items-center md:justify-between">
      <div className="md:max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Ecommerce</h3>

        <div className="grid gap-4">
          <p>
            Working with shop systems like
            <InlineBrand title="Shopware" logo={<ShopwareLogoSymbol />} />
            is also part of my work experience. I worked with Shopware 5 and the
            current Version 6.
          </p>
        </div>
      </div>

      <Card>
        <div className="grid">
          <InlineBrand
            title="Shopware"
            logo={<ShopwareLogoSymbol />}
            href="https://www.shopware.com/en/"
          />
        </div>
      </Card>
    </section>
  );
};

export default EcommerceSection;
