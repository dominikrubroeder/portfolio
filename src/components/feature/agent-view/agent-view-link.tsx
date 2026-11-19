import { ArrowRightIcon } from '@heroicons/react/16/solid';

import { Button } from '@/components/ui/button';

export function AgentViewLink({ className }: { className?: string }) {
  return (
    <Button
      variant="ghost-foreground"
      size="small"
      href="/agent-view"
      prefetch={false}
      className={className}
    >
      <span>Agent view</span>
      <ArrowRightIcon />
    </Button>
  );
}
