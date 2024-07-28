import discussion from '@/data/discussion.json';

export async function GET(request: Request) {
  let id: string | null;
  const {searchParams} = new URL(request.url);

  if (searchParams.get('id')) {
    id = searchParams.get('id');
  }

  const result = [discussion].filter((entry) => {
    return entry.id.toString() === id
  });

  return Response.json(result);
}

