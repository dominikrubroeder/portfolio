import { redirect } from 'next/navigation';

import { Breadcrumb } from '@/components/atoms/breadcrumb';
import { Container } from '@/components/atoms/container';
import { getComponent } from '@/components/organisms/component-showcase/helper';
import { ModifyThemeDrawer } from '@/components/organisms/theme';

export default async function FVComponentPage({
  params
}: {
  params: Promise<{ componentId: string }>;
}) {
  const { componentId } = await params;
  const data = getComponent({ componentId });

  if (!data) redirect('/');

  return (
    <div className="space-y-8">
      <Container
        as="section"
        size="container"
        className="relative space-y-8 border-b"
      >
        <Breadcrumb
          breadcrumb={[
            {
              href: '/',
              label: 'Home'
            },
            {
              href: '/frontend-vision-ui',
              label: 'Frontend Vision UI'
            },
            {
              href: `/${componentId}`,
              label: data.componentName
            }
          ]}
        />

        <Container className="flex min-h-[45svh] items-center justify-center pb-4">
          <div className="animate-scale">{data.component}</div>
        </Container>
      </Container>

      <Container as="section" size="readable-container">
        <div className="flex flex-wrap justify-between gap-4">
          <h1>{data.componentName}</h1>
          <ModifyThemeDrawer buttonProps={{ size: 'small' }} buttonIconOnly />
        </div>
      </Container>
    </div>
  );
}
