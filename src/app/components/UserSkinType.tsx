import styles from './UserSkinType.module.css';

interface UserSkinTypeProps {
  userSkinType: string
}

const UserSkinType = ({userSkinType}: UserSkinTypeProps) => {

  return (
    <p className={styles.UserSkinType}>{userSkinType}</p>
  )
}

export default UserSkinType;

