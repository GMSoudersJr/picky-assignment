import styles from './DateCreated.module.css';

interface DateCreatedProps {
  createdAt: string
}

const DateCreated = ({createdAt}: DateCreatedProps) => {

  const res = new Date(createdAt);
  const date = res.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <p className={styles.createdAt}>{date}</p>
  )
}

export default DateCreated

