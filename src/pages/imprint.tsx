import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/layout';

const Imprint: React.FC<NextPage> = () => {
  return (
    <Layout pageTitle="Imprint" showHeader={true}>
      <section className="mx-auto mt-8 grid w-full max-w-3xl gap-8">
        <h1 className="text-xl font-bold text-theme-contrary">Impressum</h1>

        <div>
          <h2 className="text-theme-contrary">Angaben gemäß §5 TMG</h2>
          <p>Dominik Rubröder</p>
          <p>Akeleistraße 42</p>
          <p>82515 Wolfratshausen</p>

          <h2 className="text-theme-contrary">Kontakt</h2>
          <p>
            Telefon:
            <a
              href="tel:+4915120780269"
              title="Call +49 151 20780269"
              className="ml-1"
            >
              +49 151 20780269
            </a>
          </p>
          <p>
            E-Mail:
            <a
              href="mailto:dominik.rubroeder@icloud.com"
              title="Send mail to: dominik.rubroeder@icloud.com"
              className="ml-1"
            >
              dominik.rubroeder@icloud.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Imprint;
