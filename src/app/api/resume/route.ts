import resume from './resume.json';

export function GET() {
  return Response.json(resume);
}
