import { components } from '@/components/organisms/component-showcase';

export function getComponent({ componentId }: { componentId: string }) {
  const allComponents = components
    .map((componentGroup) => componentGroup.children)
    .flat();

  return allComponents.find(
    (component) => component.componentId === componentId
  );
}

export function formatComponentName({ name }: { name: string }) {
  return name.toLowerCase().replaceAll(' ', '-');
}
