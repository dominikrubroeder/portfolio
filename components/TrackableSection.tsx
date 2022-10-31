import React, { useEffect, useRef } from 'react';
import useIsOnScreen from '../hooks/useIsOnScreen';

interface TrackableSectionProps {
  children: React.ReactNode;
  id: number;
  className?: string;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
}

const TrackableSection: React.FC<TrackableSectionProps> = ({
  children,
  id,
  className,
  setActiveSection
}) => {
  const sectionRef = useRef<null | HTMLElement>(null);
  const sectionIsOnScreen = useIsOnScreen(sectionRef, 0.25);

  useEffect(() => {
    if (sectionIsOnScreen) setActiveSection(id);
  }, [sectionIsOnScreen]);

  return (
    <section
      ref={sectionRef}
      className={`${className ? className : ''}`}
      id={`section-${id}`}
    >
      {children}
    </section>
  );
};

export default TrackableSection;
