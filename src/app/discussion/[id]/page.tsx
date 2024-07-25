import type { Metadata } from "next";
import styles from "./page.module.css";
import { getDiscussion, getComments } from "@/app/lib/utils";
import Discussion from "@/components/discussion/Discussion";
import Comment from "@/components/comment/Comment";

export const metadata: Metadata = {
  title: "Discussion | Picky Assignment",
  description: "A discussion board for all things K-Beauty",
};

export default async function FullDiscussionPage({ params }: { params: { id: string } }) {

  const discussion = await getDiscussion(params.id);

  const comments = await getComments();

  return (
    <main className={styles.main}>
        <section id="discussion">
          <h2>Discussion</h2>
          {discussion && discussion.map((discussion) => {
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
                  image_urls={discussion.image_urls}
                  content={discussion.content}
                />
              )
            } else {
              return(
                <h1>No Discussion</h1>
              )
            }
          })}
        </section>
        <section id="comments" className={styles.commentSection}>
          <h2>Comments</h2>
          {comments && comments.map(( comment ) => {
            if (comment) {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  content={comment.content}
                  image_urls={comment.image_urls}
                  viewCount={comment.viewCount}
                  upvoteCount={comment.upvoteCount}
                  commentCount={comment.commentCount}
                  category={comment.category}
                  user={comment.user}
                  createdAt={comment.createdAt}
                  replies={comment.replies}
                />
              )
            } else {
              return (
                <h2>No comments!</h2>
              )
            }
          })}
        </section>
    </main>
  )
}
