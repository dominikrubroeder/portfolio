import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate';
import { BrandList, BrandRow } from '@/components/organisms/brand';
import { Hr } from '@/components/atoms/hr';
import { mainTechnologies, technologies } from '@/components/organisms/technologies';
import { Ul } from '@/components/atoms/ul';

export default function TechnologiesPage() {
  return (
    <>
      <Animate delay={0.1}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h1>Technologies</h1>
          <p>
            Technologies; languages that bring design to life with code. There
            is a wide array of frameworks out there, here is a collection of
            some of them:
          </p>
        </Container>
      </Animate>

      <Animate delay={0.16}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h2>What i use in daily code</h2>
          <div>
            <BrandList brands={mainTechnologies} />
          </div>
        </Container>
      </Animate>

      <Animate delay={0.24}>
        <Container as="section" size="container-readable" className="space-y-2">
          <h2>More technologies in the stack</h2>
          <Ul className="grid gap-6 sm:gap-10">
            {technologies
              .slice()
              .sort((a, b) => {
                return a.group.localeCompare(b.group);
              })
              .map((item, index) => (
                <li key={`all-tools-${item.group}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative flex justify-between gap-4">
                      <div className="font-bold">{item.group}</div>
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
                    </div>
                  </div>
                </li>
              ))}
          </Ul>
        </Container>
      </Animate>

      <Hr variant="container" />
    </>
  );
}
