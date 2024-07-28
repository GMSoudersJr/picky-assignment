import Image from "next/image";
import upIcon from "@/images/icon-up-big-19-px@3x.png";
import downIcon from "@/images/icon-down-big-19-px@3x.png";
import { SetStateAction, useState } from "react";
import { Dispatch } from "react";
import styles from './ReplyToggler.module.css';
import {lato} from "@/fonts";
import { isSingular } from "@/app/lib/utils";

interface ReplyTogglerProps {
  numberOfReplies: number;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

const ReplyToggler = ({ numberOfReplies, onToggle }: ReplyTogglerProps) => {

  const [showReplies, setShowReplies] = useState(false);

  function handleClick() {
    setShowReplies(showReplies => !showReplies);
    onToggle(!showReplies);
  }

  return (
    <div
      onClick={handleClick}
      className={styles.toggler}
    >
      <p style={lato.style} className={styles.text}>
        {showReplies  ? 'hide' : 'show'} {isSingular(numberOfReplies) ? 'reply' : 'replies'}
      </p>
      <Image
        className={styles.directionIcon}
        src={showReplies ? downIcon : upIcon}
        height={19}
        width={19}
        alt={showReplies ? 'up icon' : 'down icon'}
      />
    </div>

  )
}

export default ReplyToggler;
