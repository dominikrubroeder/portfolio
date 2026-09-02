import {
  PlaygroundDetailDetails,
  PlaygroundDetailHero
} from '@/components/organisms/playground';
import { Suspense } from 'react';
import { Container } from '@/components/organisms/layout';
import { Button } from '@/components/atoms/button';
import { ArrowLeft } from 'lucide-react';

export default function PlaygroundDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <>
      <Container>
        <Button variant="ghost-muted" href="/playground" className="-ml-2">
          <ArrowLeft /> Playground
        </Button>
      </Container>

      <Suspense
        fallback={
          <Container
            className="relative flex min-h-[50svh] items-center justify-center px-4 py-8"
            size="container"
          >
            Loading...
          </Container>
        }
      >
        <PlaygroundDetailHero params={params} />
      </Suspense>

      <Suspense>
        <PlaygroundDetailDetails params={params} />
      </Suspense>

      <Container className="pt-8">
        <Button variant="ghost-muted" href="/playground" className="-ml-2">
          <ArrowLeft /> Playground
        </Button>
      </Container>
    </>
  );
}
