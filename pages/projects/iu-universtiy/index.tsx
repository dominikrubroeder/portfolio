import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import Accordion from '../../../components/ui/Accordion';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

export default function IuUniversityProjectsPage() {
  const router = useRouter();

  return (
    <Layout pageTitle="IU universtiy Projects">
      <header className="sticky top-0 flex items-center justify-between border-b border-b-apple-gray-6 p-4">
        <Button
          variant="text"
          icon={<ArrowLeftIcon className="h-5 w-5 text-accent" />}
          text="Back"
          onClick={() => router.back()}
        />
        <div className="flex max-w-3xl flex-1 items-center justify-between">
          <h1 className="text-xl font-bold text-theme-contrary">
            iu universtiy projects.
          </h1>
          <span className="text-xs font-normal text-apple-gray-4">
            Projects
          </span>
        </div>
        <div></div>
      </header>

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
  );
}
