import Link from 'next/link';
import styles from './Content.module.css';

interface ContentProps {
  content: string;
  id?: number;
  disabled: boolean;
}

const Content = ({content, id, disabled}: ContentProps) => {

  if (disabled) {
    return (
      <p className={styles.content}>{content}</p>
    )
  } else {
    return (
      <Link href={`/discussion/${id}`} className={styles.content}>
        <p>{content}</p>
      </Link>
    )
  }
}

export default Content;
