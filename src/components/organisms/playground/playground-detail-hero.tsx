import { Container } from '@/components/organisms/layout';
import { redirect } from 'next/navigation';
import { playgroundComponents } from '@/components/organisms/playground/data';

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
