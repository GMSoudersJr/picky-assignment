import Link from 'next/link';
import styles from './Content.module.css';

interface ContentProps {
  content: string;
  id?: number;
}

const Content = ({content, id}: ContentProps) => {

  if (id) {
    return (
      <Link href={`/discussion/${id}`} className={styles.content}>
        <p>{content}</p>
      </Link>
    )
  } else {
    return (
      <p className={styles.content}>{content}</p>
    )
  }
}

export default Content;
