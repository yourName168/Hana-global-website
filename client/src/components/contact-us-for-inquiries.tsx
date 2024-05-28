import type { NextPage } from "next";
import Card from "./card";
import styles from "./contact-us-for-inquiries.module.css";

const ContactUsForInquiries: NextPage = () => {
  return (
    <section className={styles.contactUsForInquiries}>
      <div className={styles.visitOurOffice}>
        <h2 className={styles.ourTeamMembers}>Our Team Members</h2>
        <div className={styles.withTheBest}>
          With the best tour guides and skilled staff, we provide the best and
          most enjoyable travel experience.
        </div>
      </div>
      <div className={styles.cardParent}>
        <Card
          buttomSectionFrame="/rectangle-4153@2x.png"
          title="Nelson Bam"
          job="Head Officer"
          vuesaxoutlineinstagram="/vuesaxoutlineinstagram-1.svg"
          vuesaxoutlinewhatsapp="/vuesaxoutlinewhatsapp3.svg"
          vuesaxoutlinefacebook="/vuesaxoutlinefacebook-1.svg"
        />
        <Card
          buttomSectionFrame="/rectangle-4153-1@2x.png"
          title="Camer Williamson"
          job="Supervisor"
          vuesaxoutlineinstagram="/vuesaxoutlineinstagram-1.svg"
          vuesaxoutlinewhatsapp="/vuesaxoutlinewhatsapp3.svg"
          vuesaxoutlinefacebook="/vuesaxoutlinefacebook-1.svg"
        />
        <Card
          buttomSectionFrame="/rectangle-4153-2@2x.png"
          title="Jane Cooper"
          job="Tour Guide"
          vuesaxoutlineinstagram="/vuesaxoutlineinstagram-1.svg"
          vuesaxoutlinewhatsapp="/vuesaxoutlinewhatsapp3.svg"
          vuesaxoutlinefacebook="/vuesaxoutlinefacebook-1.svg"
        />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.contactInfoElements} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
        <div className={styles.contactInfoElements1} />
      </div>
    </section>
  );
};

export default ContactUsForInquiries;
