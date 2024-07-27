import styles from './Username.module.css'

interface UsernameProps {
  username: string
}

const Username = ({username}: UsernameProps) => {

  return (
    <h3 className={styles.username}>{username}</h3>
  )
}

export default Username;
