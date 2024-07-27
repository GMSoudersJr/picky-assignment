'use client';

import upvoteIcon from '@/images/icon-upvote-14-px@3x.png';
import Image from 'next/image';
import styles from './UpvoteCount.module.css';
import { useState } from 'react';

interface UpvotesProps {
  upvoteCount: number;
  location: 'discussion' | 'comment' | 'reply';
  id?: number;
}

const Upvotes = ({upvoteCount, id, location}: UpvotesProps) => {
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(upvoteCount);

  function handleClick() {
    setUpvoted(upvoted => !upvoted);

    if (!upvoted) setUpvotes(upvotes => upvotes + 1);
    if (upvoted) setUpvotes(upvotes => upvotes - 1);

  }

  return (
    <section className={styles.upvoteCount}>
      <Image
        className={upvoted ? styles.upvoted : styles.notUpvoted}
        src={upvoteIcon}
        alt="upvote icon"
        height={16}
        width={16}
        onClick={handleClick}
      />
      <p>{upvotes}</p>
    </section>
  )
}

export default Upvotes;

