import type { Discussion } from '@/types'
import DiscussionHeading from './Heading';
import UpvoteCount from '@/components/UpvoteCount';
import CommentCount from '@/components/CommentCount';
import DiscussionTitle from '@/components/discussion/Title';
import Content from '@/components/Content';
import Carousel from '@/components/Carousel';
import styles from './Discussion.module.css';

const Discussion = (discussion: Discussion) => {

  return (
    <section className={styles.Discussion}>
      <DiscussionHeading
        title={discussion.title}
        user={{
          image_url: discussion.user.image_url,
          nick_name: discussion.user.nick_name,
          skin_type: discussion.user.skin_type
        }}
        createdAt={discussion.createdAt}
        viewCount={discussion.viewCount}
      />
      <DiscussionTitle title={discussion.title} />
      <Content content={discussion.content} />
      <Carousel image_urls={discussion.image_urls}/>
      <div className={styles.Counts}>
        <UpvoteCount upvoteCount={discussion.upvoteCount} />
        <CommentCount commentCount={discussion.commentCount} />
      </div>
    </section>
  )
}

export default Discussion;
