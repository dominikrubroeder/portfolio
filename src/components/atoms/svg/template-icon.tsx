import { OrganismnIcon } from '@/components/atoms/svg/organism-icon';

export function TemplateIcon() {
  return (
    <div className="group relative grid size-14 items-center justify-center gap-2 overflow-hidden rounded border-3 border-primary bg-background">
      <OrganismnIcon className="scale-60 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-60 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-60 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-60 group-hover:animate-drive-up" />
    </div>
  );
}
