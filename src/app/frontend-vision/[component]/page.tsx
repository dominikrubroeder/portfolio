import { Container } from '@/components/atoms/container';

export default async function FrontendVisionPage({
  params
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;

  return (
    <div className="space-y-4">
      <Container
        as="section"
        className="flex min-h-[45svh] items-center justify-center border-b"
      >
        <p>{component}</p>
      </Container>

      <Container as="section">
        <h1>{component}</h1>
      </Container>
    </div>
  );
}
