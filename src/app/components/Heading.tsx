import DateCreated from "@/components/DateCreated";
import ProfileImg from "@/components/ProfileImg";
import UserSkinType from "@/components/UserSkinType";
import Username from "@/components/Username";
import ViewCount from "@/components/ViewCount";
import styles from "./Heading.module.css";
import Link from "next/link";

interface HeadingProps {
  user: {
    image_url: string;
    nick_name: string;
    skin_type: string;
  }
  createdAt: string;
  viewCount: number;
  location: 'discussion' | 'comment' | 'reply';
}

const basePickyLink = "https://www.gopicky.com/";

const Heading = ({user, createdAt, viewCount, location}: HeadingProps) => {

  return (
    <Link
      href={`${basePickyLink}${user.nick_name}`}
      referrerPolicy="no-referrer"
      target="_blank"
    >
      <div className={styles.Heading}>
        <ProfileImg profileImg={{
          src:user.image_url,
          alt:user.nick_name,
          location: location
          }}
        />
        <div className={styles.Details}>
          <div className={styles.UserDetails}>
            <Username username={user.nick_name} />
            <UserSkinType userSkinType={user.skin_type} />
          </div>
          <div className={styles.DiscussionDetails}>
            <DateCreated createdAt={createdAt} />
            <div className={styles.Dot}></div>
            <ViewCount views={viewCount} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Heading;


