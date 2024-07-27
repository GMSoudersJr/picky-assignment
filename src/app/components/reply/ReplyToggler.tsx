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

  if (numberOfReplies === 0) return (<></>);

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
        {showReplies  ? 'hide' : 'show'} {isSingular(numberOfReplies) ? 'reply' : 'replies'}
      </p>
    </button>

  )
}

export default ReplyToggler;
