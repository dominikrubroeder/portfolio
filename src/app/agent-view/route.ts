import { buildAgentViewMarkdown } from '@/components/feature/agent-view/agent-view-markdown';

export function GET() {
  return new Response(buildAgentViewMarkdown(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
