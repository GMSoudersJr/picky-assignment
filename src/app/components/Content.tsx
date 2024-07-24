import styles from './Content.module.css';

interface ContentProps {
  content: string
}

const Content = ({content}: ContentProps) => {

  return (
    <p className={styles.Content}>
      {content}
    </p>
  )
}

export default Content;
