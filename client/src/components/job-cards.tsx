import type { NextPage } from "next";
import styles from "./job-cards.module.css";

const JobCards: NextPage = () => {
  return (
    <section className={styles.jobCards}>
      <div className={styles.section5}>
        <div className={styles.jobCard}>
          <div className={styles.whyUs}>Why Us?</div>
          <div className={styles.infoSection}>
            <div className={styles.footer}>
              <h2 className={styles.weProvideThe}>
                We Provide The Best Travel Experience For You
              </h2>
              <div
                className={styles.indulgeInOpulence}
              >{`Indulge in opulence and create unforgettable memories with our personalized services and expert guides. `}</div>
            </div>
            <div className={styles.titleArea}>
              <div className={styles.cardTexts}>
                <img
                  className={styles.cardTextsIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div
                  className={styles.luxuriousAccommodationsIn}
                >{`Luxurious accommodations in high class hotels `}</div>
              </div>
              <div className={styles.cardTexts1}>
                <img
                  className={styles.cardTextsIcon}
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.accessToVip}>
                  Access to VIP experiences and attractions
                </div>
              </div>
              <div className={styles.cardTexts1}>
                <img
                  className={styles.cardTextsIcon}
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.accessToVip}>
                  Gourmet dining at top-rated restaurants
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.vuesaxOutlineIcon}
          loading="lazy"
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
      <div className={styles.section7}>
        <h2 className={styles.whatOurClients}>
          What Our Clients Say about Us?
        </h2>
        <div className={styles.inputSection}>
          <img
            className={styles.inputSectionChild}
            loading="lazy"
            alt=""
            src="/group-3.svg"
          />
          <div className={styles.parentFrame}>
            <div className={styles.subscribeArea}>
              <div className={styles.footerFrames}>
                <img
                  className={styles.headerFrameIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-3@2x.png"
                />
                <div className={styles.jobCard1}>
                  <div className={styles.johnDoe}>John Doe</div>
                  <div className={styles.ceoAbcCompany}>CEO, ABC Company</div>
                </div>
              </div>
              <div className={styles.facebookIconFrame}>
                <img
                  className={styles.vuesaxboldmagicStarIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldmagicstar@2x.png"
                />
                <img
                  className={styles.vuesaxboldmagicStarIcon}
                  alt=""
                  src="/vuesaxboldmagicstar-1@2x.png"
                />
                <img
                  className={styles.vuesaxboldmagicStarIcon}
                  alt=""
                  src="/vuesaxboldmagicstar-2@2x.png"
                />
                <img
                  className={styles.vuesaxboldmagicStarIcon}
                  alt=""
                  src="/vuesaxboldmagicstar-3@2x.png"
                />
                <img
                  className={styles.vuesaxboldmagicStarIcon}
                  alt=""
                  src="/vuesaxboldmagicstar-4@2x.png"
                />
              </div>
            </div>
            <div className={styles.ourTripWith}>
              Our trip with this travel agency was absolutely amazing! The
              accommodations were top-notch, the tour guides were knowledgeable
              and friendly, and the entire experience was seamless from start to
              finish. Highly recommended!
            </div>
          </div>
          <img
            className={styles.inputSectionChild}
            loading="lazy"
            alt=""
            src="/group-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default JobCards;
