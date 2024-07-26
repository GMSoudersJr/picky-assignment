import styles from './Username.module.css'

interface UsernameProps {
  username: string
}

const Username = ({username}: UsernameProps) => {

  return (
    <p className={styles.username}>{username}</p>
  )
}

export default Username;
