export type HTMLTag = 'span' | 'p' | 'div' | 'section' | 'header' | 'footer';

// TODO: Use `ComponentBaseProps` in regular components
export interface ComponentBaseProps {
  className?: string;
}

export type TShirtSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// TODO: Use `TShirtSize` or `SizeProp` across the app
export type SizeProp = TShirtSize;
