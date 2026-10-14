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
    | 'contained-white'
    | 'ghost-primary'
    | 'ghost-foreground'
    | 'ghost-muted'
    | 'text-primary'
    | 'text-foreground'
    | 'text-muted'
    | 'link-primary'
    | 'link-foreground'
    | 'link-muted';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  hideExternalIndicator?: boolean;
  children: ReactNode;
  customIcon?: boolean;
  /**
   * The button shows an icon without a visible text label. Requires `label`,
   * which becomes the accessible name and the tooltip text.
   */
  iconOnly?: boolean;
  /** Short description of what the action does. Used when `iconOnly`. */
  label?: string;
}

export interface ReducedButtonProps extends Omit<ButtonProps, 'children'> {
  children?: ReactNode;
}
