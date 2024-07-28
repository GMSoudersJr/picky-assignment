import type { TDiscussion, TComment } from '@/types';

export const isSingular = (count: number): boolean => {
  return count === 1;
}

const server = 'http://localhost:3000/api';

export async function getDiscussion(id: string): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch(`${server}/discussion/search?id=${id}`)
    console.log("Response @getDiscussion", res);
    if (!res.ok) return result;

    result = await res.json();
  } catch (error) {
    console.log("api error @getDiscussion", error);
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
    console.log("api error @getComments", error);
  }

  return result;
}

export async function getDiscussions(): Promise<TDiscussion[] | undefined> {
  let result: TDiscussion[] = [];
  try {
    const res = await fetch(`${server}/discussions`);
    if (!res.ok) return result;

    result = await res.json();
  } catch (error) {
    console.log("api error @getDiscussions", error)
  }

  return result;
}

