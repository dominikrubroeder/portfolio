'use client';

import ProjectNavigationLayout from '../../../components/projects/Layout';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <ProjectNavigationLayout>
      <div>Hello, {params.slug}</div>
    </ProjectNavigationLayout>
  );
}
