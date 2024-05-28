import type { NextPage } from "next";
import styles from "./vue-sax-outline-whatsapp.module.css";

const VueSaxOutlineWhatsapp: NextPage = () => {
  return (
    <section className={styles.vueSaxOutlineWhatsapp}>
      <div className={styles.vueSaxOutlineFacebook}>
        <b className={styles.k}>+2K</b>
        <div className={styles.happyClients}>Happy Clients</div>
      </div>
      <div className={styles.vueSaxOutlineFacebook1}>
        <div className={styles.vueSaxOutlineFacebookChild} />
      </div>
      <div className={styles.vueSaxOutlineFacebook2}>
        <b className={styles.b}>+50</b>
        <div className={styles.expertTourGuides}>Expert Tour Guides</div>
      </div>
      <div className={styles.vueSaxOutlineFacebook3}>
        <div className={styles.vueSaxOutlineFacebookChild} />
      </div>
      <div className={styles.vueSaxOutlineFacebook4}>
        <b className={styles.b}>+80</b>
        <div className={styles.luxuryTours}>Luxury Tours</div>
      </div>
      <div className={styles.vueSaxOutlineFacebook5}>
        <div className={styles.vueSaxOutlineFacebookChild} />
      </div>
      <div className={styles.vueSaxOutlineFacebook}>
        <b className={styles.b2}>+100</b>
        <div className={styles.excitingDestinations}>Exciting Destinations</div>
      </div>
    </section>
  );
};

export default VueSaxOutlineWhatsapp;
