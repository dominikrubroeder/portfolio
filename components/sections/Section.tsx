import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Header from './Header';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  alignment?: 'start' | 'center';
}

const Section: React.FC<SectionProps> = ({ title, children, alignment }) => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <Header title={title} scrollProgress={width} />

      <div
        className={`mx-auto grid w-full max-w-3xl gap-64 py-64 ${
          alignment === 'center'
            ? 'items-center justify-center'
            : 'items-start justify-start'
        }`}
        ref={sectionRef}
      >
        {children}
      </div>
    </>
  );
};

export default Section;
