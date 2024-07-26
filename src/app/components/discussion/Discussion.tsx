import Heading from '@/components/Heading';
import UpvoteCount from '@/components/UpvoteCount';
import CommentCount from '@/components/CommentCount';
import DiscussionTitle from '@/components/discussion/Title';
import Content from '@/components/Content';
import Carousel from '@/components/Carousel';
import styles from './Discussion.module.css';
import Category from '../Category';

interface DiscussionProps {
  id?: number;
  user: {
    image_url: string;
    nick_name: string;
    skin_type: string;
  }
  createdAt: string;
  viewCount: number;
  title: string;
  content: string;
  image_urls: string[];
  upvoteCount: number;
  commentCount: number;
  category: {
    id: number;
    label: string;
  }

}

const Discussion = (discussion: DiscussionProps) => {

  if (discussion) {
    return (
      <section className={styles.discussion}>
        <Category category={discussion.category.label} />
        <Heading
          location='discussion'
          user={{
            image_url: discussion.user.image_url,
            nick_name: discussion.user.nick_name,
            skin_type: discussion.user.skin_type
          }}
          createdAt={discussion.createdAt}
          viewCount={discussion.viewCount}
        />
        <DiscussionTitle title={discussion.title} id={discussion.id}/>
        <Content content={discussion.content} id={discussion.id}/>
        <Carousel image_urls={discussion.image_urls}/>
        <div className={styles.counts}>
          <UpvoteCount upvoteCount={discussion.upvoteCount} />
          <CommentCount commentCount={discussion.commentCount} />
        </div>
      </section>
    )
  } else {
    return (
      <h1>No Discussions</h1>
    )
  }
}

export default Discussion;
