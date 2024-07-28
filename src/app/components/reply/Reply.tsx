import type { TReply } from '@/types';
import styles from './Reply.module.css';
import Heading from "@/components/Heading";
import Content from "@/components/Content";
import Carousel from "@/components/Carousel";
import UpvoteCount from "@/components/UpvoteCount";
import CommentCount from "@/components/CommentCount";
import DateCreated from "@/components/DateCreated";
import ViewCount from "@/components/ViewCount";
import BookmarkIcon from '../Bookmark';

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
        />
        <Content
          content={reply.content}
          disabled={true}
        />
        <div className={styles.viewsSince}>
          <DateCreated createdAt={reply.createdAt} />
          <div className={styles.dot}></div>
          <ViewCount views={reply.viewCount} />
        </div>
        <Carousel image_urls={reply.image_urls} />
        <div className={styles.counts}>
          <UpvoteCount
            location='reply'
            upvoteCount={reply.upvoteCount}
          />
          <CommentCount commentCount={reply.commentCount} />
          <BookmarkIcon
            id={reply.id}
            location='reply'
          />
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

