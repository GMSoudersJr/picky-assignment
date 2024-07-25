import type { Metadata } from "next";
import styles from "./page.module.css";
import { getDiscussion, getComments } from "@/app/lib/utils";

export const metadata: Metadata = {
  title: "Discussion | Picky Assignment",
  description: "A discussion board for all things K-Beauty",
};

export default async function Page({ params }: { params: { id: string } }) {

  const discussion = await getDiscussion(params.id);

  const comments = await getComments();

  return (
    <main className={styles.main}>
      <div id="full-discussion">
        <div id="discussion">
          The Discussion will go here!
        </div>
        <div id="comments">
          The comments will go here!
        </div>
      </div>
    </main>
  )
}
