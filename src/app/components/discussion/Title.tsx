import styles from './Title.module.css';

interface DiscussionTitleProps {
  title: string
}

const DiscussionTitle = ({title}: DiscussionTitleProps) => {

  return (
    <h2 className={styles.Title}>{title}</h2>
  )
}

export default DiscussionTitle;

