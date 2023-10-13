import React, { useEffect, useRef } from 'react';
import useIsInView from '../../hooks/useIsInView';

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
  const sectionIsOnScreen = useIsInView(sectionRef, 0.25);

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
