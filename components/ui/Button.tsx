import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps {
  text: string;
  variant: 'contained' | 'outlined' | 'blank' | 'unstyled';
  type?: 'button' | 'submit';
  href?: string;
  isIcon?: boolean;
}

const Button: FC<ButtonProps> = ({
  text = 'Placeholder',
  variant = 'contained',
  type = 'button',
  href,
  ...props
}) => {
  const classNames = `flex items-center justify-center gap-1 rounded-full border border-transparent px-4 py-3 text-accent ${
    variant === 'contained'
      ? 'bg-accent/90 text-white hover:bg-accent'
      : variant === 'outlined'
      ? 'border-accent'
      : variant === 'blank'
      ? ''
      : ''
  }`;

  if (href)
    return (
      <Link href={href} className={classNames} {...props}>
        {text}
      </Link>
    );

  return (
    <button type={type} className={classNames} {...props}>
      {text}
    </button>
  );
};

export default Button;
