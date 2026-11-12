import { buildIntroductionApi } from '@/components/feature/introduction';

export function GET() {
  return Response.json(buildIntroductionApi());
}
