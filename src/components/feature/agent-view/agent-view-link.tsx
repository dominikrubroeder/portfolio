import { Button } from '@/components/ui/button';

export function AgentViewLink({ className }: { className?: string }) {
  return (
    <Button
      variant="text-foreground"
      size="small"
      href="/agent-view"
      prefetch={false}
      className={className}
    >
      Agent view
    </Button>
  );
}
