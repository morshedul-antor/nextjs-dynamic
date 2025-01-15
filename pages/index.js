import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App </title>
      </Head>

      <main className={styles.main}>
        <h1>Next.js Dynamic Routing</h1>

        <Link href="/users/search?name=&skip=0&limit=5">
          <button>User List</button>
        </Link>
      </main>
    </div>
  );
}
