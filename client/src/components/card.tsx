import type { NextPage } from "next";
import styles from "./card.module.css";

type CardType = {
  buttomSectionFrame?: string;
  title?: string;
  job?: string;
  vuesaxoutlineinstagram?: string;
  vuesaxoutlinewhatsapp?: string;
  vuesaxoutlinefacebook?: string;
};

const Card: NextPage<CardType> = ({
  buttomSectionFrame,
  title,
  job,
  vuesaxoutlineinstagram,
  vuesaxoutlinewhatsapp,
  vuesaxoutlinefacebook,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.buttomSectionFrame}
        loading="lazy"
        alt=""
        src={buttomSectionFrame}
      />
      <div className={styles.titleAndText}>
        <b className={styles.title}>{title}</b>
        <div className={styles.job}>{job}</div>
        <div className={styles.socialMediaFrames}>
          <img
            className={styles.vuesaxoutlineinstagramIcon}
            loading="lazy"
            alt=""
            src={vuesaxoutlineinstagram}
          />
          <img
            className={styles.vuesaxoutlineinstagramIcon}
            loading="lazy"
            alt=""
            src={vuesaxoutlinewhatsapp}
          />
          <img
            className={styles.vuesaxoutlineinstagramIcon}
            loading="lazy"
            alt=""
            src={vuesaxoutlinefacebook}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
