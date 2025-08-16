import { BrandList } from '@/components/organisms/brand';
import { mainSocials } from '@/components/organisms/socials';

export function Socials() {
  return (
    <div className="scroll-mt-24 space-y-8" id="socials">
      <header>
        <h2>
          Social accounts
          <span className="ml-2 font-medium text-muted-foreground">
            You can see my social presence on
          </span>
        </h2>
      </header>

      <BrandList brands={mainSocials} />
    </div>
  );
}
