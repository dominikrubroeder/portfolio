import React, { useEffect, useRef } from 'react';
import useIsOnScreen from '../../hooks/useIsOnScreen';

interface SectionProps {
  children: React.ReactNode;
  id: number;
  className?: string;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
}

const Section: React.FC<SectionProps> = ({
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

export default Section;