import React from 'react';
import Card from './ui/Card';

const CurrentlyInTheMakingCard: React.FC = () => {
  return (
    <Card className="m-4 max-w-md animate-growAndShrink">
      <div className="grid gap-2">
        <span className="text-xs uppercase">Come back later.</span>
        <h1 className="text-gradient bg-gradient-to-t from-apple-purple to-apple-pink text-3xl font-bold">
          This Website is currently in the making.
        </h1>
      </div>
    </Card>
  );
};

export default CurrentlyInTheMakingCard;
