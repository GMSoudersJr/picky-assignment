import styles from './UserSkinType.module.css';

interface UserSkinTypeProps {
  userSkinType: string
}

const UserSkinType = ({userSkinType}: UserSkinTypeProps) => {

  return (
    <p className={styles.userSkinType}>{userSkinType}</p>
  )
}

export default UserSkinType;

