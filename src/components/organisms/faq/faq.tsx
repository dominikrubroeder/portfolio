import { FaqDesignEngineerVsUxEngineer } from '@/components/organisms/faq/faq-design-engineer-vs-ux-engineer';
import { FaqUxDesigner } from '@/components/organisms/faq/faq-ux-designer';
import { FaqUxEngineer } from '@/components/organisms/faq/faq-ux-engineer';
import { FaqWhatIsAUxEngineer } from '@/components/organisms/faq/faq-what-is-a-ux-engineer';

export function FAQ() {
  return (
    <div className="scroll-mt-24 space-y-8" id="faq">
      <header className="space-y-6">
        <h2>
          QA
          <span className="ml-2 font-medium text-muted-foreground">
            Some questions and answers about UX design engineering
          </span>
        </h2>
      </header>

      <div id="accordion-group">
        <FaqWhatIsAUxEngineer />
        <FaqUxDesigner />
        <FaqUxEngineer />
        <FaqDesignEngineerVsUxEngineer />
      </div>
    </div>
  );
}
