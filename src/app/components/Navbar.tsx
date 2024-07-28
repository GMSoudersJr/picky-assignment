import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import searchIcon from '@/images/search@3x.png'

const Navbar = () => {

  return (
    <ul className={styles.navbar}>
      {PAGES.map((page) => {
        if (page.path.startsWith('/')) {
          return(
            <li
              key={page.path}
              className={styles[`${page.class}`]}
            >
              <Link
                href={page.path}
              >
                {page.label}
              </Link>
            </li>
          )
        } else {
          return(
            <li
              key={page.path}
              className={styles[`${page.class}`]}
            >
              <Link
                href={page.path}
                referrerPolicy="no-referrer"
                target="_blank"
              >
                {page.label}
              </Link>
            </li>
          )
        }
      })}
      <div className={styles.search}>
        <button type="submit" className={styles.searchButton}>
          <Image
            className={styles.searchIcon}
            src={searchIcon}
            alt="search icon"
            height={16}
            width={16}
          />
        </button>
      </div>
    </ul>
  );
};

const PAGES = [
  {
    path: "/",
    label: "picky",
    class: 'picky'
  },
  {
    path: "/discussion",
    label: "discussion",
    class: 'discussion'
  },
  {
    path: "https://creatorsapp.gopicky.com/sign-up",
    label: "picky for creators",
    class: 'pickyForCreators'
  },
  {
    path: "https://picky.notion.site/Picky-Plus-Creators-Program-Overview-Membership-Benefits-Rules-932af58f7d4841baba8c4eb6b564334c",
    label: "join picky➕",
    class: 'joinPicky'
  },
];

export default Navbar;
