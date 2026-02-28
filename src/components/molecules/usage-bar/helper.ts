import type { UsageLevel } from '@/components/organisms/tools';

export const getUsageBarDescription = ({
  usageLevel
}: {
  usageLevel: UsageLevel;
}) => {
  switch (usageLevel) {
    case 'Aware':
      return 'Aware – Understands the purpose and core concepts. No hands-on project usage yet.';
    case 'Basic':
      return 'Basic – Limited hands-on use. Able to perform simple tasks.';
    case 'Working':
      return 'Working – Used in projects with guidance or defined scope.';
    case 'Applied':
      return 'Applied – Used independently in multiple projects.';
    case 'Advanced':
      return 'Advanced – Applied in complex or high-impact work.';
    case 'Expert':
      return 'Expert – Deep expertise. Optimization, mentoring, or strategic application.';
    default:
      return '';
  }
};
