import type { TComment } from "@/types";
import styles from './Comment.module.css';
import Heading from "@/components/Heading";
import Content from "@/components/Content";
import Carousel from "@/components/Carousel";
import UpvoteCount from "@/components/UpvoteCount";
import CommentCount from "@/components/CommentCount";

const Comment = (comment: TComment) => {

  if (comment) {
    return (
      <section className={styles.comment}>
        <Heading
          location='comment'
          user={{
            image_url: comment.user.image_url,
            nick_name: comment.user.nick_name,
            skin_type: comment.user.skin_type
          }}
          createdAt={comment.createdAt}
          viewCount={comment.viewCount}
        />
        <Content content={comment.content}/>
        <Carousel image_urls={comment.image_urls} />
        <div className={styles.Counts}>
          <UpvoteCount upvoteCount={comment.upvoteCount} />
          <CommentCount commentCount={comment.commentCount} />
        </div>
        {comment.replies.length > 0 && (<h1 className={styles.reply}>there is a reply</h1>)}
      </section>
    )
  } else {
    return (
      <h2>No comment!</h2>
    )
  }
}

export default Comment;
