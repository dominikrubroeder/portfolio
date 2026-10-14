import { redirect } from 'next/navigation';

import { Container } from '@/components/ui/container';

import { playgroundComponents } from '@/components/feature/playground/playground-data';

export async function PlaygroundDetailHero({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const componentId = (await params)?.slug;
  const Component = playgroundComponents.find(
    (component) => component.id === componentId
  )?.component;

  if (!Component) redirect('/playground');

  return (
    <Container
      as="section"
      className="relative flex min-h-[60svh] items-center justify-center border-b pb-10"
      size="container"
    >
      {Component}
    </Container>
  );
}
