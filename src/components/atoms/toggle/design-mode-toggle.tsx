import Toggle from '@/components/atoms/toggle/toggle';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function DesignModeToggle() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const designMode = searchParams.get('designMode');

  return (
    <Toggle
      label="Design mode"
      onClick={() =>
        updateSearchParams({
          withName: 'designMode',
          withValue: designMode ? 'false' : 'true'
        })
      }
      className="absolute top-4 right-4"
      enabled={designMode === 'true'}
    />
  );
}
