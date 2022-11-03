import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface HeaderProps {
  title: string;
  scrollProgress: MotionValue;
}

const Header: React.FC<HeaderProps> = ({ title, scrollProgress }) => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center gap-4 border-b border-apple-gray-6 bg-theme-base/30 py-4 backdrop-blur-sm md:hidden md:gap-4">
      <h2 className="inline-block w-max text-xl font-bold text-theme-contrary md:text-3xl">
        {title}
      </h2>

      <span className="relative h-8 flex-1">
        <motion.span
          className="absolute h-8 rounded-full bg-gradient-to-t from-apple-purple to-apple-pink"
          style={{ width: scrollProgress }}
        ></motion.span>
      </span>
    </header>
  );
};

export default Header;
