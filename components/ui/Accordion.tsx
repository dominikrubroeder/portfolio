import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

interface AccordionProps {
  title: string | JSX.Element;
  icon?: JSX.Element;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'contained' | 'outlined';
  subline?: string | JSX.Element;
  overline?: string | JSX.Element;
  iconText?: string | JSX.Element;
  href?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  icon,
  children,
  className,
  onClick,
  variant,
  subline,
  overline,
  iconText,
  href
}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = () => {
    if (!href) setIsExpanded((previousState) => !previousState);
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <div
      className={`group grid min-w-[18.75rem] cursor-pointer gap-2 rounded-xl border border-transparent py-3 px-4 transition ${
        variant === 'contained' ? 'bg-apple-gray-6 hover:bg-apple-gray-5' : ''
      } ${variant === 'outlined' ? 'border-apple-gray-6 bg-transparent' : ''} ${
        className ? className : ''
      }`}
    >
      <header
        className={`flex cursor-pointer justify-between ${
          subline ? 'items-start' : 'items-center'
        }`}
        onClick={onClickHandler}
      >
        <div className="grid gap-4">
          {overline && <div>{overline}</div>}

          <div className="grid gap-0">
            <div
              className={`transition group-hover:text-theme-contrary ${
                subline ? 'text-theme-contrary' : ''
              }`}
            >
              {title}
            </div>
            {subline && <div className="text-xs">{subline}</div>}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {iconText && <span>{iconText}</span>}

          <span>
            {icon ? (
              icon
            ) : (
              <ChevronRightIcon
                className={`h-5 w-5 text-accent transition ${
                  isExpanded ? 'rotate-90' : 'rotate-0'
                }`}
              />
            )}
          </span>
        </div>
      </header>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 400
            }}
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
