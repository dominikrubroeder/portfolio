import { AtomIcon } from '@/components/atoms/svg/atom-icon';

export function MoleculeIcon() {
  return (
    <div className="group relative flex items-center">
      <AtomIcon className="-mr-6 scale-[-1]" />
      <AtomIcon className="bg-transparent" />
    </div>
  );
}
