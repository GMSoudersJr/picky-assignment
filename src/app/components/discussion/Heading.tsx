import DateCreated from "@/components/DateCreated";
import ProfileImg from "@/components/ProfileImg";
import UserSkinType from "@/components/UserSkinType";
import Username from "@/components/Username";
import ViewCount from "@/components/ViewCount";
import styles from "./Heading.module.css";

interface DiscussionHeadingProps {
  title: string;
  user: {
    image_url: string;
    nick_name: string;
    skin_type: string;
  }
  createdAt: string;
  viewCount: number;
}

const DiscussionHeading = ({title, user, createdAt, viewCount}: DiscussionHeadingProps) => {

  return (
    <section className={styles.Heading}>
      <ProfileImg profileImg={{
        src:user.image_url,
        alt:user.nick_name,
        location:'discussion'
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

    </section>
  )
}

export default DiscussionHeading;


