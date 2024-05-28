/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./job-title-frame.module.css";
import NavBar from "./nav-bar";

const JobTitleFrame: NextPage = () => {
  return (
    <section className={styles.jobTitleFrame}>
      <NavBar activeTab="home" />
    </section>
  );
};

export default JobTitleFrame;
