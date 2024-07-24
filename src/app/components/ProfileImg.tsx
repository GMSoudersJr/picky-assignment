import Image from "next/image";
import styles from './ProfileImg.module.css';

interface ProfileImageProps {
  profileImg: {
    src: string;
    alt: string;
    location: 'discussion' | 'comment' | 'reply'
  }
}

const baseImgUrl = "https://picky-app.s3-ap-southeast-1.amazonaws.com/users/";

function completeImageUrl( { location, src }: ProfileImageProps["profileImg"] ) {
  if (location === 'discussion') return baseImgUrl + src

  return src;
}

const ProfileImg = ({profileImg}: ProfileImageProps) => {

  return (
    <Image
      className={styles.ProfileImg}
      alt={profileImg.alt || "profile image"}
      src={completeImageUrl(profileImg)}
      height={60}
      width={60}
    />
  )
}

export default ProfileImg;
