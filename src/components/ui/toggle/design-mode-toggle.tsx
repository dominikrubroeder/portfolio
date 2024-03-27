import Toggle from '@/components/ui/toggle/toggle';
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
      className="absolute right-4 top-4"
      enabled={designMode === 'true'}
    />
  );
}
