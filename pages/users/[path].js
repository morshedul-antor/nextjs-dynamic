import styles from "../../styles/Home.module.css";
import { Home } from "../../components";
import Head from "next/head";
import Link from "next/link";

export default function Users({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Routing | Next App</title>
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          <Link href="/">Users ({(data && data.length) || 0})</Link>
        </h2>

        <Home />

        <ol>
          {data &&
            data.map((item) => (
              <>
                <li key={item.id}>{item.name}</li> <br />
              </>
            ))}
        </ol>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name, skip, limit } = context.query;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?q=${name}&_start=${skip}&_limit=${limit}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
