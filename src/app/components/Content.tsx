import Link from 'next/link';
import styles from './Content.module.css';
import {lato} from '@/fonts';

interface ContentProps {
  content: string;
  id?: number;
  disabled: boolean;
}

const Content = ({content, id, disabled}: ContentProps) => {
  let contentToDisplay = content;

  if (disabled) {
    return (
      <p
        style={lato.style}
        className={styles.content}
      >
        {contentToDisplay}
      </p>
    )
  } else {
    if (content.length > 140) contentToDisplay = content.slice(0, 100) + '...'
    return (
      <Link href={`/discussion/${id}`} className={styles.content}>
        <p
          className={styles.contentLink}
          style={lato.style}>{contentToDisplay}
        </p>
      </Link>
    )
  }
}

export default Content;
