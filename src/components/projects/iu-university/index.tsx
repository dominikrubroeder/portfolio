import Layout from '../../layout';
import Accordion from '../../ui/Accordion';
import Card from '../../ui/Card';
import ProjectNavigationLayout from '../Layout';

export default function IuUniversityProjectsPage() {
  return (
    <ProjectNavigationLayout>
      <Layout pageTitle="IU universtiy Projects">
        <section className="flex min-h-screen items-center">
          <div className="mx-auto grid gap-4">
            <header>
              <h1>iu university projects</h1>
            </header>

            <Card>
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
          </div>
        </section>
      </Layout>
    </ProjectNavigationLayout>
  );
}
