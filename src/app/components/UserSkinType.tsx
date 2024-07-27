import {lato} from '@/fonts';
import styles from './UserSkinType.module.css';

interface UserSkinTypeProps {
  userSkinType: string
}

const UserSkinType = ({userSkinType}: UserSkinTypeProps) => {

  return (
    <p
      className={styles.userSkinType}
      style={lato.style}
    >
      {userSkinType}
    </p>
  )
}

export default UserSkinType;

