import ProfileImg from "@/components/ProfileImg";
import UserSkinType from "@/components/UserSkinType";
import Username from "@/components/Username";
import styles from "./Heading.module.css";
import Link from "next/link";

interface HeadingProps {
  user: {
    image_url: string;
    nick_name: string;
    skin_type: string;
  }
  location: 'discussion' | 'comment' | 'reply';
}

const basePickyLink = "https://www.gopicky.com/";

const Heading = ({user, location}: HeadingProps) => {

  return (
    <Link
      href={`${basePickyLink}${user.nick_name}`}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <div className={styles.heading}>

        <ProfileImg profileImg={{
          src:user.image_url,
          alt:user.nick_name,
          location: location
          }}
        />

        <div className={styles.details}>

          <div className={styles.userDetails}>
            <Username username={user.nick_name} />
            <UserSkinType userSkinType={user.skin_type} />
          </div>

        </div>

      </div>
    </Link>
  )
}

export default Heading;


