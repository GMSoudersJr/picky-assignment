import type { Metadata } from "next";
import styles from "./page.module.css";
import discussion from '../lib/data/discussion.json';
import Discussion from "@/app/components/discussion/Discussion";

export const metadata: Metadata = {
  title: "Discussion",
  description: "A discussion about something",
};

export default function DiscussionPage() {
  return (
    <main className={styles.main}>
      <Discussion
        category={discussion.category}
        createdAt={discussion.createdAt}
        user={discussion.user}
        commentCount={discussion.commentCount}
        upvoteCount={discussion.upvoteCount}
        viewCount={discussion.viewCount}
        title={discussion.title}
        id={discussion.id}
        image_urls={discussion.image_urls}
        content={discussion.content}
      />
    </main>
  );
}
