import Link from 'next/link';
import styles from './Title.module.css';

interface DiscussionTitleProps {
  title: string
  id?: number
}

const DiscussionTitle = ({title, id}: DiscussionTitleProps) => {

  if (id) {
    return (
      <Link href={`/discussion/${id}`} className={styles.title}>
        <h2>{title}</h2>
      </Link>
    )
  } else {
    return (
      <h2 className={styles.title}>{title}</h2>
    )
  }
}

export default DiscussionTitle;

