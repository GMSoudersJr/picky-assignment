import type { TDiscussion, TComment } from '@/types';

export const isSingular = (count: number): boolean => {
  return count === 1;
}

const dev = process.env.NODE_ENV !== 'production';

const server = dev ? 'http://localhost:3000/api' : `https://picky-assignment.vercel.app/api`;

export async function getDiscussions(): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch(`${server}/discussions`);
    if (!res.ok) return result;

    result = await res.json();
  } catch (error) {
    console.log("api error", error)
  }

  return result;
}

export async function getDiscussion(id: string): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch(`${server}/discussion/search?id=${id}`)
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
    const res = await fetch(`${server}/comments`);
    if (!res.ok) return result;

    result = await res.json();

  } catch (error) {
    console.log("api error", error);
  }

  return result;
}

