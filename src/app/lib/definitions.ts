type Category = {
  id: number;
  label: string;
}

type User = {
  id: number;
  image_url: string;
  nick_name: string;
  skin_type: string;
}

export type TDiscussion = {
  id: number;
  title: string;
  content: string;
  image_urls: string[] | [];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
  createdAt: string;
} | undefined;

export type Reply = {
  id: number;
  content: string;
  image_urls: string[] | [];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
  createdAt: string;
}

export type TComment = {
  id: number;
  content: string;
  image_urls: string[] | [];
  viewCount: number;
  upvoteCount: number;
  commentCount: number;
  category: Category;
  user: User;
  createdAt: string;
  replies: Reply[] | [];
} | undefined;
