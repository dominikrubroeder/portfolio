import Link from 'next/link';
import { FC } from 'react';

interface ButtonProps {
  text: string;
  variant: 'contained' | 'outlined' | 'text' | 'unstyled';
  type?: 'button' | 'submit';
  href?: string;
  icon?: JSX.Element;
  iconPosition?: 'leading' | 'trailing';
  className?: string;
}

const Button: FC<ButtonProps> = ({
  text = 'Placeholder',
  variant = 'contained',
  icon,
  iconPosition = 'leading',
  type = 'button',
  href,
  className = '',
  ...props
}) => {
  const classNames = `flex items-center gap-1 rounded-full border border-transparent px-4 py-3 text-accent ${
    variant === 'contained'
      ? 'bg-accent/90 text-white hover:bg-accent'
      : variant === 'outlined'
      ? 'border-accent'
      : variant === 'text'
      ? 'px-0 py-0'
      : ''
  }`;

  if (href)
    return (
      <Link href={href} className={`${classNames} ${className}`} {...props}>
        {icon && iconPosition === 'leading' ? icon : null}
        {text}
        {icon && iconPosition === 'trailing' ? icon : null}
      </Link>
    );

  return (
    <button type={type} className={`${classNames} ${className}`} {...props}>
      {icon && iconPosition === 'leading' ? icon : null}
      {text}
      {icon && iconPosition === 'trailing' ? icon : null}
    </button>
  );
};

export default Button;
