import { AnimatedProgress } from '@/components/atoms/animated-progress';

import type { PlaygroundComponent } from '@/components/organisms/playground';
import { IOSVerticalControl } from '@/components/organisms/iOS';

export const playgroundComponents: PlaygroundComponent[] = [
  {
    id: 'animated-progress',
    title: 'Animated Progress',
    description:
      'Indicate the progress of state in a circular shape, similar to the iOS battery status widget',
    detailedDescription:
      'When the `animate-progress` component is small, the percentage symbol is skipped',
    component: <AnimatedProgress size={48} strokeWidth={6} progress={90} />,
    componentDirective: 'use client',
    references: [
      'https://motion.dev/docs/react-use-animate',
      'https://motion.dev/docs/react-use-in-view'
    ],
    code: `
'use client'

const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`,
    filename: 'animated-progress.tsx',
    animated: true
  },
  {
    id: 'ios-vertical-control',
    title: 'iOS Vertical Control',
    description:
      'Adjust brightness, volume or other settings from the iOS control center',
    component: <IOSVerticalControl initialValue={40} />,
    componentDirective: 'use client',
    filename: 'ios-vertical-control.tsx',
    animated: false
  }
];
