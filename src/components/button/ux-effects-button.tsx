import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';

export default function UxEffectsButton() {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const uxEffects = searchParams.get('uxEffects');

  return (
    <button
      className="pt-12 text-violet-400"
      title="Toggle UX effects, UX Engineer at mediawave"
      aria-label="Toggle UX effects, UX Engineer at mediawave"
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
