import Toggle from '@/components/ui/toggle/toggle';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function DevModeToggle() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const devMode = searchParams.get('devMode');

  return (
    <Toggle
      label="Dev mode"
      onClick={() =>
        updateSearchParams({
          withName: 'devMode',
          withValue: devMode ? 'false' : 'true'
        })
      }
      className="absolute right-4 top-[3.75rem]"
      enabled={devMode === 'true'}
    />
  );
}
