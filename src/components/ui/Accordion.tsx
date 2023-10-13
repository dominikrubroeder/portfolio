import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLongRightIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

interface AccordionProps {
  title: string | JSX.Element;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'contained' | 'outlined';
  subline?: string | JSX.Element;
  overline?: string | JSX.Element;
  iconText?: string | JSX.Element;
  href?: string;
  expanded?: boolean;
  action?: () => void;
  actionLabel?: string;
  isGroup?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
  onClick,
  variant,
  subline,
  overline,
  iconText,
  href,
  expanded = false,
  action,
  actionLabel,
  isGroup = true
}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(expanded);

  const onClickHandler = () => {
    if (!href) setIsExpanded((previousState) => !previousState);
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <div
      className={`${
        isGroup ? 'group' : ''
      } grid min-w-[18.75rem] cursor-pointer gap-2 rounded-xl border border-transparent px-4 py-3 transition ${
        variant === 'contained' ? 'bg-apple-gray-6 hover:bg-apple-gray-5' : ''
      } ${variant === 'outlined' ? 'border-apple-gray-6 bg-transparent' : ''} ${
        className ? className : ''
      } ${href ? 'hover:translate-x-2' : 'hover:-translate-y-1'}`}
    >
      <header
        className={`flex cursor-pointer justify-between gap-4 ${
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
          {action && actionLabel && (
            <span className="text-xs text-accent" onClick={() => action()}>
              {actionLabel}
            </span>
          )}

          {iconText && <span>{iconText}</span>}

          <span>
            {href ? (
              <ArrowLongRightIcon className="h-5 w-5 text-accent" />
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

      {children && (
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
                opacity: 0,
                height: 0
              }}
              transition={{ ease: 'easeOut' }}
            >
              <div>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Accordion;
