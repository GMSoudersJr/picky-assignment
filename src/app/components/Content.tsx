import Link from 'next/link';
import styles from './Content.module.css';
import {lato} from '@/fonts';

interface ContentProps {
  content: string;
  id?: number;
  disabled: boolean;
}

const Content = ({content, id, disabled}: ContentProps) => {

  if (disabled) {
    return (
      <p
        style={lato.style}
        className={styles.content}
      >
        {content}
      </p>
    )
  } else {
    return (
      <Link href={`/discussion/${id}`} className={styles.content}>
        <p style={lato.style}>{content}</p>
      </Link>
    )
  }
}

export default Content;
