import styles from './ViewCount.module.css';

interface ViewProps {
  views: number
}

const ViewCount = ({views}: ViewProps) => {

  return (
    <p className={styles.viewCount}>{views} Views</p>
  )
}

export default ViewCount;

