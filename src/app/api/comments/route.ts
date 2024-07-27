import comments from '@/data/comments.json';

export async function GET() {

  return Response.json(comments);
};
