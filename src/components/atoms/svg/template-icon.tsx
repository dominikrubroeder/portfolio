import { OrganismnIcon } from '@/components/atoms/svg/organism-icon';

export function TemplateIcon() {
  return (
    <div className="group relative flex grid size-14 items-center justify-center overflow-hidden rounded border-4 border-primary bg-background">
      <OrganismnIcon className="scale-70 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-70 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-70 group-hover:animate-drive-up" />
      <OrganismnIcon className="scale-70 group-hover:animate-drive-up" />
    </div>
  );
}
