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
      <div className={styles.fullDiscussionContainer}>
        <section id="discussion">
          {discussion && discussion.map((discussion) => {
            if (discussion) {
              return (
                <Discussion
                  category={discussion.category}
                  commentCount={discussion.commentCount}
                  content={discussion.content}
                  createdAt={discussion.createdAt}
                  disableLink={true}
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
                <h1 key={'no-discussion'}>No Discussion</h1>
              )
            }
          })}
        </section>
        <section id="comments" className={styles.commentSection}>
          <h2>Comments</h2>
          <div className={styles.horizontalRule}></div>
          {comments && comments.map(( comment ) => {
            if (comment) {
              return (
                <Comment
                  category={comment.category}
                  commentCount={comment.commentCount}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  id={comment.id}
                  image_urls={comment.image_urls}
                  key={comment.id}
                  replies={comment.replies}
                  upvoteCount={comment.upvoteCount}
                  user={comment.user}
                  viewCount={comment.viewCount}
                />
              )
            } else {
              return (
                <h2 key={'no-comments'}>No comments!</h2>
              )
            }
          })}
        </section>
      </div>
    </main>
  )
}
