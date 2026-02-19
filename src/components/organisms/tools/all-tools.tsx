import { ToggleContent } from '@/components/molecules/toggle-content';
import { tools } from '@/components/organisms/tools';
import { BrandRow } from '../brand';
import { Ul } from '@/components/atoms/ul';

export function AllTools() {
  return (
    <ToggleContent
      label="All tools"
      buttonPropsFirst={{ variant: 'contained-muted' }}
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
                <div className="font-bold">{item.group}</div>

                <Ul className="space-y-5 rounded border bg-background p-4 sm:space-y-3 sm:p-4">
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
              </div>
            </li>
          ))}
      </Ul>
    </ToggleContent>
  );
}
