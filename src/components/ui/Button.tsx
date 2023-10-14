import { useRouter } from 'next/navigation';

interface ButtonProps {
  text: string;
  variant: 'contained' | 'outlined' | 'text' | 'unstyled';
  type?: 'button' | 'submit';
  href?: string;
  icon?: JSX.Element;
  iconPosition?: 'leading' | 'trailing';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text = 'Placeholder',
  variant = 'contained',
  icon,
  iconPosition = 'leading',
  type = 'button',
  href,
  className = '',
  onClick,
  ...props
}: ButtonProps) {
  const router = useRouter();
  const classNames = `flex items-center gap-1 rounded-full border border-transparent px-4 py-3 text-accent ${
    variant === 'contained'
      ? 'bg-accent/90 text-white hover:bg-accent'
      : variant === 'outlined'
      ? 'border-accent'
      : variant === 'text'
      ? 'px-0 py-0'
      : ''
  }`;

  const onClickHandler = () => {
    if (onClick) onClick();
    if (href) router.push(href);
  };

  return (
    <button
      type={type}
      className={`${classNames} ${className}`}
      onClick={onClickHandler}
      {...props}
    >
      {icon && iconPosition === 'leading' ? icon : null}
      {text}
      {icon && iconPosition === 'trailing' ? icon : null}
    </button>
  );
}
