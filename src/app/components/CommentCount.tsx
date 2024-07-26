import commentIcon from '@/images/icon-comment-14-px@3x.png';
import Image from 'next/image';
import styles from './CommentCount.module.css';

interface CommentCountProps {
  commentCount: number
}

const CommentCount = ({commentCount}: CommentCountProps) => {

  return (
    <section className={styles.commentCount}>
      <Image
        className={styles.commentIcon}
        src={commentIcon}
        alt="upvote icon"
        height={16}
        width={16}
      />
      <p>{commentCount}</p>
    </section>
  )
}

export default CommentCount;


