import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>

      <h1>Picky Frontend Assignment by Gerald</h1>
      <h2>
        Navigate to <Link href='/discussion' > discussion </Link> to get started!
      </h2>
      <div>
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
