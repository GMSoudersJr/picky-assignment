import type { TDiscussion, TComment } from '@/types';

export const isSingular = (count: number): boolean => {
  return count === 1;
}

export async function getDiscussion(id: string): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch(`http://localhost:3000/api/discussion/search?id=${id}`)
    if (!res.ok) return result;

    result = await res.json();
  } catch (error) {
    console.log("api error", error);
  }

  return result;
}

export async function getComments(): Promise<TComment[] | undefined> {
  let result: TComment[] = [];
  try {
    const res = await fetch("http://localhost:3000/api/comments");
    if (!res.ok) return result;

    result = await res.json();

  } catch (error) {
    console.log("api error", error);
  }

  return result;
}

export async function getDiscussions(): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch("http://localhost:3000/api/discussions");
    if (!res.ok) return result;

    result = await res.json();
  } catch (error) {
    console.log("api error", error)
  }

  return result;
}

