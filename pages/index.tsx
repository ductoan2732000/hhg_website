import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import HomeContent from "@/components/home/index.tsx";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeContent></HomeContent>
    </div>
  );
};

export default Home;
