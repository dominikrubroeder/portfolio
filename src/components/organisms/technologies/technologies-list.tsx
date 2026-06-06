import { ToggleContent } from '@/components/molecules/toggle-content';
import { technologies } from '@/components/organisms/technologies';
import { BrandRow } from '@/components/organisms/brand';
import { Ul } from '@/components/organisms/typography';

export function TechnologiesList() {
  return (
    <ToggleContent
      label="All technologies"
      buttonPropsFirst={{ variant: 'contained-muted' }}
      id="all-technologies"
    >
      <ul className="grid gap-6 sm:gap-10">
        {technologies
          .slice()
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item, index) => (
            <li key={`all-technologies-${item.group}`}>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative flex justify-between gap-4">
                  <div className="font-bold">{item.group}</div>

                  {index === 0 && (
                    <span className="absolute top-1/2 right-17 -translate-y-1/2 text-xs sm:right-22">
                      Usage level
                    </span>
                  )}
                </div>

                <Ul className="space-y-5 rounded border bg-background p-2 sm:p-4">
                  {item.children
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((child) => (
                      <li key={`all-technologies-${item.group}-${child.name}`}>
                        <BrandRow
                          brand={child}
                          index={index}
                          showKnowledgeBar
                        />
                      </li>
                    ))}
                </Ul>
              </div>
            </li>
          ))}
      </ul>
    </ToggleContent>
  );
}
