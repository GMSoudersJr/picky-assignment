import Image from "next/image";
import upIcon from "@/images/icon-up-big-19-px@3x.png";
import downIcon from "@/images/icon-down-big-19-px@3x.png";
import { SetStateAction, useState } from "react";
import { Dispatch } from "react";
import styles from './ReplyToggler.module.css';
import {lato} from "@/fonts";

interface ReplyTogglerProps {
  numberOfReplies: number;
  onToggle: Dispatch<SetStateAction<boolean>>;
}

const ReplyToggler = ({ numberOfReplies, onToggle }: ReplyTogglerProps) => {

  if (numberOfReplies === 0) return (<></>);
  const singular = (count: number): boolean => {
    return count === 1;
  }


  const [showReplies, setShowReplies] = useState(false);

  function handleClick() {
    setShowReplies(showReplies => !showReplies);
    onToggle(!showReplies);
  }

  return (
    <button
      onClick={handleClick}
      className={styles.toggler}
    >
      <Image
        src={showReplies ? upIcon : downIcon}
        height={19}
        width={19}
        alt={showReplies ? 'up icon' : 'down icon'}
      />
      <p style={lato.style}>
        {showReplies  ? 'hide' : 'show'} {singular(numberOfReplies) ? 'reply' : 'replies'}
      </p>
    </button>

  )
}

export default ReplyToggler;
