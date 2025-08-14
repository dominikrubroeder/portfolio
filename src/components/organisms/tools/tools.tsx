import { BrandList } from '@/components/molecules/brand-list';
import { AllTools, mainTools } from '@/components/organisms/tools';

export function Tools() {
  return (
    <div className="scroll-mt-24 space-y-8" id="tools">
      <div className="space-y-6">
        <h2>
          Tools
          <span className="ml-2 font-medium text-muted-foreground">
            help to visualize, communicate and support building the application
            we create. I use
          </span>
        </h2>

        <BrandList brands={mainTools} />
      </div>

      <AllTools />
    </div>
  );
}
