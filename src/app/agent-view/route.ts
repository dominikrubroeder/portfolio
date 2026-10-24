import { buildAgentViewMarkdown } from '@/components/feature/agent-view';

export function GET() {
  return new Response(buildAgentViewMarkdown(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
