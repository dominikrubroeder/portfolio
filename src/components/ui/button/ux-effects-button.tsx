import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function UxEffectsButton() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const uxEffects = searchParams.get('uxEffects');

  return (
    <button
      className="pt-12 text-accent"
      title="Toggle UX effects"
      aria-label="Toggle UX effects"
      onClick={() =>
        updateSearchParams({
          withName: 'uxEffects',
          withValue: uxEffects === 'true' ? 'false' : 'true',
          withCleanup: true
        })
      }
    >
      UX Engineer
    </button>
  );
}
