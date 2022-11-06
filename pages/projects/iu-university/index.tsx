import Layout from '../../../components/layout';
import Accordion from '../../../components/ui/Accordion';
import Card from '../../../components/ui/Card';
import ProjectNavigationLayout from '../Layout';

export default function IuUniversityProjectsPage() {
  return (
    <ProjectNavigationLayout>
      <Layout pageTitle="IU universtiy Projects">
        <section className="flex min-h-screen items-center">
          <Card className="mx-auto">
            <div className="grid max-w-sm gap-2">
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
        </section>
      </Layout>
    </ProjectNavigationLayout>
  );
}
