import type {
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactNode
} from 'react';

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?:
    | 'contained'
    | 'contained-muted'
    | 'ghost'
    | 'ghost-muted'
    | 'text'
    | 'text-muted';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rounded?: boolean;
  children: ReactNode;
}

export interface ReducedButtonProps extends Omit<ButtonProps, 'children'> {
  children?: ReactNode;
}
