export function getDefaultOpen({
  defaultOpen,
  index
}: {
  defaultOpen: boolean | number | undefined;
  index: number;
}) {
  return defaultOpen && typeof defaultOpen === 'boolean'
    ? index === 0
    : typeof defaultOpen === 'number'
      ? index === defaultOpen
      : false;
}
