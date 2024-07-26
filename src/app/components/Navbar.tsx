import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css';
import searchIcon from '@/images/search@3x.png'

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      {PAGES.map((page) => {
        if (page.path.startsWith('/')) {
          return(
            <Link key={page.path} href={page.path}>
              {page.label}
            </Link>
          )
        } else {
          return(
            <Link
              key={page.path}
              href={page.path}
              referrerPolicy="no-referrer"
              target="_blank"
            >
              {page.label}
            </Link>
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
    </div>
  );
};

const PAGES = [
  {
    path: "/",
    label: "Picky",
  },
  {
    path: "/products",
    label: "products",
  },
  {
    path: "/curation",
    label: "curation",
  },
  {
    path: "/discussion",
    label: "discussion",
  },
  {
    path: "https://creatorsapp.gopicky.com/sign-up",
    label: "picky for creators",
  },
  {
    path: "https://picky.notion.site/Picky-Plus-Creators-Program-Overview-Membership-Benefits-Rules-932af58f7d4841baba8c4eb6b564334c",
    label: "join picky➕",
  },
];

export default Navbar;
