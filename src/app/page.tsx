import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          src="/images/icon-picky@3x.png"
          alt="Next.js Logo"
          width={32}
          height={32}
          priority
        />
      </div>

    </main>
  );
}
