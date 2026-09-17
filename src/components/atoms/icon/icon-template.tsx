import { OrganismnIcon } from '@/components/atoms/icon/icon-organism';

export function IconTemplate() {
  return (
    <div className="group relative grid size-14 items-center justify-center gap-2 overflow-hidden rounded border-3 border-primary bg-background">
      <OrganismnIcon className="group-hover:motion-safe:animate-drive-up scale-60" />
      <OrganismnIcon className="group-hover:motion-safe:animate-drive-up scale-60" />
      <OrganismnIcon className="group-hover:motion-safe:animate-drive-up scale-60" />
      <OrganismnIcon className="group-hover:motion-safe:animate-drive-up scale-60" />
    </div>
  );
}
