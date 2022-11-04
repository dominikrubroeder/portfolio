import React from 'react';
import InlineBrand from '../../InlineBrand';
import ShopwareLogoSymbol from '../../svg/ShopwareLogoSymbol';
import Card from '../../ui/Card';

const EcommerceSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-4">
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Ecommerce</h3>
        <p>
          Working with shop systems like
          <InlineBrand title="Shopware" logo={<ShopwareLogoSymbol />} />
          is also part of my work experience. I worked with Shopware 5 and the
          current Version 6.
        </p>
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
