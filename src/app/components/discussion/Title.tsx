import Link from 'next/link';
import styles from './Title.module.css';

interface DiscussionTitleProps {
  title: string
  id: number
}

const DiscussionTitle = ({title, id}: DiscussionTitleProps) => {

  return (
    <Link href={`/discussion/${id}`} className={styles.title}>
      <h2>{title}</h2>
    </Link>
  )
}

export default DiscussionTitle;

