export type PageParams = Promise<{ slug: string | null; id: string | null }>;
export type PageSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type HTMLTag =
  | 'span'
  | 'p'
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'footer';

// TODO: Use `ComponentBaseProps` in regular components
export interface ComponentBaseProps {
  className?: string;
}

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

export type SizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// TODO: Use `ColorVariantProp` across the app
export type ColorReducedProp = 'primary' | 'foreground' | 'muted';

export type ColorIntentionProp = 'success' | 'info' | 'warning' | 'destructive';

export type ColorProp = ColorReducedProp | ColorIntentionProp;
