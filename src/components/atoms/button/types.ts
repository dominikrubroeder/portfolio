import type {
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactNode
} from 'react';

export interface ButtonProps extends HTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> {
  variant?:
    | 'contained-primary'
    | 'contained-foreground'
    | 'contained-muted'
    | 'ghost-primary'
    | 'ghost-foreground'
    | 'ghost-muted'
    | 'text-primary'
    | 'text-foreground'
    | 'text-muted';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  rounded?: boolean;
  download?: boolean;
  children: ReactNode;
}

export interface ReducedButtonProps extends Omit<ButtonProps, 'children'> {
  children?: ReactNode;
}
