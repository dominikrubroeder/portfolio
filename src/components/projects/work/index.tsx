import ProjectNavigationLayout from '../Layout';
import Card from '../../ui/Card';
import Accordion from '../../ui/Accordion';

export default function WorkProjectsPage() {
  return (
    <ProjectNavigationLayout>
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
    </ProjectNavigationLayout>
  );
}
