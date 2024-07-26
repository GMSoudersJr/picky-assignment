import commentIcon from '@/images/icon-comment-14-px@3x.png';
import Image from 'next/image';
import styles from './CommentCount.module.css';

interface CommentCountProps {
  commentCount: number
}

const CommentCount = ({commentCount}: CommentCountProps) => {

  return (
    <div className={styles.commentCount}>
      <Image
        className={styles.commentIcon}
        src={commentIcon}
        alt="upvote icon"
        height={16}
        width={16}
      />
      <p>{commentCount}</p>
    </div>
  )
}

export default CommentCount;


