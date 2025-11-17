export type HTMLTag = 'span' | 'p' | 'div' | 'section' | 'header' | 'footer';

// TODO: Use `ComponentBaseProps` in regular components
export interface ComponentBaseProps {
  className?: string;
}

export type TShirtSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// TODO: Use `TShirtSize` or `SizeProp` across the app
export type SizeProp = TShirtSize;

export type PositionProp =
  | 'left'
  | 'top'
  | 'bottom'
  | 'right'
  | 'bottom-right'
  | 'bottom-left';

export type SortAlphabeticallyProp = 'A-Z' | 'Z-A';

export type SortByProgressProp = 'progress-100-0' | 'progress-100-0-A-Z';

export type SortByType = 'type-A-Z';

export type SortProp = SortAlphabeticallyProp | SortByProgressProp;
