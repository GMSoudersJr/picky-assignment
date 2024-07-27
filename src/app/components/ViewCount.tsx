import {lato} from '@/fonts';
import styles from './ViewCount.module.css';

interface ViewProps {
  views: number
}

const ViewCount = ({views}: ViewProps) => {

  return (
    <p
      style={lato.style}
      className={styles.viewCount}
    >
      {views} Views
    </p>
  )
}

export default ViewCount;

