import upvoteIcon from '@/images/icon-upvote-14-px@3x.png';
import Image from 'next/image';
import styles from './UpvoteCount.module.css';

interface UpvotesProps {
  upvoteCount: number
}

const Upvotes = ({upvoteCount}: UpvotesProps) => {

  return (
    <section className={styles.UpvoteCount}>
      <Image
        src={upvoteIcon}
        alt="upvote icon"
        height={16}
        width={16}
      />
      <p>{upvoteCount}</p>
    </section>
  )
}

export default Upvotes;

