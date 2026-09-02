import {
  Balloon,
  ChartNoAxesGantt,
  Code,
  NotebookPen,
  Sparkle,
  User,
  Wrench
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function IconLucide({
  name,
  className
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case 'user':
      return <User className={cn(className)} />;
    case 'chart-no-axes-gantt':
      return <ChartNoAxesGantt className={cn(className)} />;
    case 'wrench':
      return <Wrench className={cn(className)} />;
    case 'code':
      return <Code className={cn(className)} />;
    case 'balloon':
      return <Balloon className={cn(className)} />;
    case 'notebook-pen':
      return <NotebookPen className={cn(className)} />;
    case 'sparkle':
      return <Sparkle className={cn(className)} />;
    default:
      return undefined;
  }
}
