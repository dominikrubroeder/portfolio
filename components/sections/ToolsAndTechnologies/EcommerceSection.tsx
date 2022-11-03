import React from 'react';
import Card from '../../ui/Card';

const EcommerceSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-4">
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Ecommerce</h3>
        <p>
          <span className="text-theme-contrary">Shopware</span> is the best tool
          for designers creating scalable user interfaces in a collaborative
          way.
        </p>
      </div>

      <Card>
        <div className="grid">
          <div>Shopware</div>
        </div>
      </Card>
    </section>
  );
};

export default EcommerceSection;
