import React from 'react';
import { socialData } from '../../../data';
import InlineBrand from '../../InlineBrand';
import Card from '../../ui/Card';

const Socials: React.FC = () => {
  return (
    <div className="grid gap-4 md:flex md:gap-4">
      {socialData.map((social) => (
        <Card key={social.title}>
          <InlineBrand href={social.href} logo={social.logo} interactive />
        </Card>
      ))}
    </div>
  );
};

export default Socials;
