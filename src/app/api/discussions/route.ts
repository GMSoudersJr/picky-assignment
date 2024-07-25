import discussion from '@/data/discussion.json';

export async function GET() {

  return Response.json([discussion])
}
