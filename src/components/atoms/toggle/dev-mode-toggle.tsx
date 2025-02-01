import Toggle from '@/components/atoms/toggle/toggle';
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
      className="absolute top-[3.75rem] right-4"
      enabled={devMode === 'true'}
    />
  );
}
