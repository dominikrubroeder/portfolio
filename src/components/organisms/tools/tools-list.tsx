import { ToggleContent } from '@/components/molecules/toggle-content';
import { tools } from '@/components/organisms/tools';
import { Ul } from '@/components/organisms/typography';
import { BrandRow } from '@/components/organisms/brand';

export function ToolsList() {
  return (
    <ToggleContent
      label="All tools"
      buttonPropsFirst={{ variant: 'contained-muted' }}
      id="all-tools"
    >
      <Ul className="grid gap-6 sm:gap-10">
        {tools
          .slice()
          .sort((a, b) => {
            return a.group.localeCompare(b.group);
          })
          .map((item, index) => (
            <li key={`all-tools-${item.group}`}>
              <div className="space-y-3 sm:space-y-4">
                <div className="relative flex justify-between gap-4">
                  <div className="font-bold">{item.group}</div>

                  {index === 0 && (
                    <span className="absolute top-1/2 right-17 -translate-y-1/2 text-xs sm:right-29">
                      Usage level
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Ul className="mb-0 space-y-5 rounded border bg-background p-4 sm:space-y-3 sm:p-4">
                    {item.children
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((child) => (
                        <li key={`${item.group}-${child.name}`}>
                          <BrandRow
                            brand={child}
                            index={index}
                            showKnowledgeBar
                          />
                        </li>
                      ))}
                  </Ul>

                  {item.description && (
                    <small className="block">{item.description}</small>
                  )}
                </div>
              </div>
            </li>
          ))}
      </Ul>
    </ToggleContent>
  );
}
