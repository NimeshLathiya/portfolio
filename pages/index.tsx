import Head from "next/head";
import Image from "next/image";
import Abouts from "../components/Abouts";
import ContactUs from "../components/ContactUs";
import Education from "../components/Education";
import Experiance from "../components/Experiance";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title className="text-red-600">Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Abouts />
        <Experiance/>
        <Education/>
        <Portfolio/>
        <ContactUs/>
      </main>
    </div>
  );
}
