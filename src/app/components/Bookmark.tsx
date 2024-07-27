'use client';

import Image from "next/image";
import bookmarkIcon from "@/images/icon-bookmark-14-px@3x.png";
import styles from "./Bookmark.module.css";
import { useState } from "react";

interface BookmarkIconProps {
  location: 'discussion' | 'comment' | 'reply';
  id?: number;
}

const BookmarkIcon = ({location, id}: BookmarkIconProps) => {

  const [bookmarked, setBookmarked] = useState(false);

  function handleClick() {
    setBookmarked(bookmarked => !bookmarked);

    let bookmarkInfo = {
      location: location,
      id: id,
      isBookmarked: bookmarked
    }

    if (!bookmarked) alert(`Adding ${bookmarkInfo.location} ${bookmarkInfo.id} to your bookmarks.`);
    if (bookmarked) alert(`Removing ${bookmarkInfo.location} ${bookmarkInfo.id} from your bookmarks.`);
  }

  return (
    <Image
      className={bookmarked ? styles.bookmarked : styles.notBookmarked}
      src={bookmarkIcon}
      height={16}
      width={16}
      alt="bookmark-icon"
      onClick={handleClick}
    />
  )
}

export default BookmarkIcon;
