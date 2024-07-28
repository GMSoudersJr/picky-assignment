import Link from 'next/link';
import styles from './Title.module.css';

interface DiscussionTitleProps {
  title: string;
  id?: number;
  disabled: boolean;
}

const DiscussionTitle = ({title, id, disabled}: DiscussionTitleProps) => {

  if (disabled) {
    return (
      <h2 className={styles.title}>{title}</h2>
    )
  } else {
    return (
      <Link href={`/discussion/${id}`} className={styles.title}>
        <h2>{title}</h2>
      </Link>
    )
  }
}

export default DiscussionTitle;

