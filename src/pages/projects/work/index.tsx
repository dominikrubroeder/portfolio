import ProjectNavigationLayout from '../Layout';
import Layout from '../../../components/layout';
import Card from '../../../components/ui/Card';
import Accordion from '../../../components/ui/Accordion';

export default function WorkProjectsPage() {
  return (
    <ProjectNavigationLayout>
      <Layout pageTitle="Work projects">
        <section className="flex min-h-screen items-center">
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
        </section>
      </Layout>
    </ProjectNavigationLayout>
  );
}
