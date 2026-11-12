import { buildSelectedWorksApi } from '@/components/feature/selected-works';

export function GET() {
  return Response.json(buildSelectedWorksApi());
}
