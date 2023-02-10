import ProjectNavigationLayout from './Layout';
import Layout from '../../components/layout';
import Card from '../../components/ui/Card';
import Accordion from '../../components/ui/Accordion';
import { useRouter } from 'next/router';

export default function ProjectsPage() {
  const router = useRouter();

  const seeAll = (id: string) => {
    router.push(`projects/${id}`);
  };

  return (
    <ProjectNavigationLayout>
      <Layout pageTitle="Projects">
        <section className="flex min-h-screen items-center">
          <div className="mx-auto grid gap-16">
            <div className="grid min-w-[26rem] gap-2">
              <Accordion
                title="iu university projects."
                variant="outlined"
                action={() => seeAll('iu-university')}
                actionLabel="See all (6)"
                expanded
                isGroup={false}
              >
                <Card className="mx-auto">
                  <div className="grid max-w-sm gap-2">
                    <Accordion
                      variant="contained"
                      title="Semester 7"
                      href="/projects/iu-universtiy/semester-7"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 6"
                      href="/projects/iu-universtiy/semester-6"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 5"
                      href="/projects/iu-universtiy/semester-5"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 4"
                      href="/projects/iu-universtiy/semester-4"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 3"
                      href="/projects/iu-universtiy/semester-3"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 2"
                      href="/projects/iu-universtiy/semester-2"
                    />

                    <Accordion
                      variant="contained"
                      title="Semester 1"
                      href="/projects/iu-universtiy/semester-1"
                    />
                  </div>
                </Card>
              </Accordion>
            </div>

            <div className="grid min-w-[26rem] gap-2">
              <Accordion
                title="frontendmentor-io projects."
                variant="outlined"
                action={() => seeAll('frontendmentor.io')}
                actionLabel="See all (13)"
                expanded
                isGroup={false}
              >
                <Card className="mx-auto">
                  <div className="grid max-w-sm gap-2">
                    <Accordion
                      variant="contained"
                      title="Advice generator app"
                      href="/projects/frontendmentor.io/advice-generator-app"
                    />

                    <Accordion
                      variant="contained"
                      title="Ecommerce product page"
                      href="/projects/frontendmentor.io/ecommerce-product-page"
                    />

                    <Accordion
                      variant="contained"
                      title="Entertainment web app"
                      href="/projects/frontendmentor.io/entertainment-web-app"
                    />

                    <Accordion
                      variant="contained"
                      title="Expenses chart component"
                      href="/projects/frontendmentor.io/entertainment-web-app"
                    />

                    <Accordion
                      variant="contained"
                      title="Expenses chart component"
                      href="/projects/frontendmentor.io/expenses-chart-component"
                    />

                    <Accordion
                      variant="contained"
                      title="GitHub user search app"
                      href="/projects/frontendmentor.io/github-user-search-app"
                    />

                    <Accordion
                      variant="contained"
                      title="Interactive comments sections"
                      href="/projects/frontendmentor.io/interactive-comments-sections"
                    />

                    <Accordion
                      variant="contained"
                      title="Interactive pricing component"
                      href="/projects/frontendmentor.io/interactive-pricing-component"
                    />

                    <Accordion
                      variant="contained"
                      title="Intro section with dropdown navigation"
                      href="/projects/frontendmentor.io/intro-section-with-dropdown-navigation"
                    />

                    <Accordion
                      variant="contained"
                      title="Password generator app"
                      href="/projects/frontendmentor.io/password-generator-app"
                    />

                    <Accordion
                      variant="contained"
                      title="Skilled elearning landing page"
                      href="/projects/frontendmentor.io/skilled-elearning-landing-page"
                    />

                    <Accordion
                      variant="contained"
                      title="Space tourism"
                      href="/projects/frontendmentor.io/space-tourism"
                    />

                    <Accordion
                      variant="contained"
                      title="Tip calculator"
                      href="/projects/frontendmentor.io/tip-calculator"
                    />

                    <Accordion
                      variant="contained"
                      title="Todo app"
                      href="/projects/frontendmentor.io/todo-app"
                    />
                  </div>
                </Card>
              </Accordion>
            </div>

            <div className="grid min-w-[26rem] gap-2">
              <Accordion
                title="Work projects."
                variant="outlined"
                action={() => seeAll('work')}
                actionLabel="See all (2)"
                expanded
                isGroup={false}
              >
                <Card className="mx-auto">
                  <div className="grid max-w-sm gap-2">
                    <Accordion
                      variant="contained"
                      title="ALLES.AUTO"
                      href="/projects/work/alles-auto"
                    />

                    <Accordion
                      variant="contained"
                      title="Wegmann"
                      href="/projects/work/wegmann"
                    />
                  </div>
                </Card>
              </Accordion>
            </div>
          </div>
        </section>
      </Layout>
    </ProjectNavigationLayout>
  );
}
