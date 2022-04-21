import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const newCars =
    "https://www.autotrader.com/wp-content/uploads/2022/02/best-new-cars-feb-2022.jpg";
  const usedCars =
    "https://www.autotrader.com/wp-content/uploads/2020/06/best-used-cars-for-2020-1.jpg";
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Next Car</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Site dedicated to your next car.</h1>
        <p className={styles.description}>
          Get started by selecting a car you like.
        </p>
        <div className={styles.grid} onClick={() => {}}>
          <Link href="/cars/new">
            <div className={styles.card}>
              <h1>New cars</h1>
              
                <Image
                  className={styles.card}
                  width={350}
                  height={200}
                  src={newCars}
                />
              
            </div>
          </Link>

          <Link href="/cars/used">
            <div className={styles.card}>
              <h1>Used cars</h1>

                <Image width={350} height={200} src={usedCars} />

            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Valchax
        </a>
      </footer>
    </div>
  );
};

export default Home;
