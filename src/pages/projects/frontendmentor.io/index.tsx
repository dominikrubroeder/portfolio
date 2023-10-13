import ProjectNavigationLayout from '../Layout';
import Layout from '../../../components/layout';
import Card from '../../../components/ui/Card';
import Accordion from '../../../components/ui/Accordion';

// sort
// alhpabetically
// filter
// withLiveURL, withDesignFile, isFinished

export default function FrontendmentorIoProjectsPage() {
  return (
    <ProjectNavigationLayout>
      <Layout pageTitle="frontendmentor.io projects">
        <section className="flex min-h-screen items-center">
          <div className="mx-auto grid gap-4">
            <header className="flex items-center justify-between gap-4 px-4">
              Filters: <span className="text-xs text-accent">13</span>
            </header>

            <Card className="grid gap-4">
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
          </div>
        </section>
      </Layout>
    </ProjectNavigationLayout>
  );
}
