import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homes from "./Home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-center"></h1>
      <Homes />
    </div>
  );
}
