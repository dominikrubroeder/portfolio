import { IconAtom } from '@/components/atoms/icon/icon-atom';

export function IconMolecule() {
  return (
    <div className="group relative flex items-center">
      <IconAtom className="-mr-6 scale-[-1]" />
      <IconAtom className="bg-transparent" />
    </div>
  );
}
