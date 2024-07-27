import type { Metadata } from "next";
import styles from "./page.module.css";
import Discussion from "@/app/components/discussion/Discussion";
import { getDiscussions, isSingular } from "@/app/lib/utils";

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
          {discussions && discussions.length} {discussions && isSingular(discussions.length)
          ? 'Discussion' : 'Discussions'}
        </h4>

        {discussions && discussions.map((discussion) => {
          if (discussion) {
            return (
              <Discussion
                category={discussion.category}
                commentCount={discussion.commentCount}
                content={discussion.content}
                createdAt={discussion.createdAt}
                disableLink={false}
                id={discussion.id}
                image_urls={discussion.image_urls}
                key={discussion.id}
                title={discussion.title}
                upvoteCount={discussion.upvoteCount}
                user={discussion.user}
                viewCount={discussion.viewCount}
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
