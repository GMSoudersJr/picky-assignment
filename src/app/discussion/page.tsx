import type { Metadata } from "next";
import styles from "./page.module.css";
import Discussion from "@/app/components/discussion/Discussion";
import { getDiscussions } from "../lib/utils";

export const metadata: Metadata = {
  title: "Discussion | Picky Assignment",
  description: "A discussion board for all things K-Beauty",
};

export default async function DiscussionPage() {

  const discussions = await getDiscussions();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h4 className={styles.heading}>
          {discussions && discussions.length} Discussion{discussions && discussions.length > 1 ? 's' : ''}
        </h4>

        {discussions && discussions.map((discussion) => {
          if (discussion) {
            return (
              <Discussion
                key={discussion.id}
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
            )
          } else {
            return(
              <h1 key={'no-discussions'}>No Discussions</h1>
            )
          }
        })}

      </div>
    </main>
  );
}
