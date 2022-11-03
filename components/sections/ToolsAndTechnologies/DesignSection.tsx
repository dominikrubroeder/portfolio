import React from 'react';
import Card from '../../ui/Card';

const DesignSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-4">
      <div className="max-w-lg">
        <h3 className="text-3xl font-bold text-theme-contrary">Design</h3>

        <div className="grid gap-4">
          <p>
            When it comes to design,
            <span className="text-theme-contrary">Figma</span> is the best tool
            for me to create scalable user interfaces in a collaborative and
            reusable way. Also setting up Prototypes, Wireframes or listing
            information architechtures with
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
            applications are used to work with any graphic design related tasks.
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
  );
};

export default DesignSection;
