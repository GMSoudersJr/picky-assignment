import type { TReply } from '@/types';
import styles from './Reply.module.css';
import Heading from "@/components/Heading";
import Content from "@/components/Content";
import Carousel from "@/components/Carousel";
import UpvoteCount from "@/components/UpvoteCount";
import CommentCount from "@/components/CommentCount";

const Reply = (reply: TReply) => {

  if (reply) {
    return (
      <section className={styles.reply}>
        <Heading
          location='reply'
          user={{
            image_url: reply.user.image_url,
            nick_name: reply.user.nick_name,
            skin_type: reply.user.skin_type
          }}
          createdAt={reply.createdAt}
          viewCount={reply.viewCount}
        />
        <Content content={reply.content}/>
        <Carousel image_urls={reply.image_urls} />
        <div className={styles.counts}>
          <UpvoteCount upvoteCount={reply.upvoteCount} />
          <CommentCount commentCount={reply.commentCount} />
        </div>
      </section>
    )
  } else {
    return (
      <h2>No reply!</h2>
    )
  }
}

export default Reply;

