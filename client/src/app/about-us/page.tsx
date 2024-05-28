/* eslint-disable @next/next/no-img-element */
import FrameComponent from "@/components/booking";
import type { NextPage } from "next";
import ContactUsForInquiries from "../../components/contact-us-for-inquiries";
import Footer3 from "../../components/footer";
import JobCards from "../../components/job-cards";
import JobTitleFrame from "../../components/job-title-frame";
import VueSaxOutlineWhatsapp from "../../components/vue-sax-outline-whatsapp";
import styles from "./about-us.module.css";

const AboutUs: NextPage = () => {
  return (
    <div className={styles.aboutUs}>
      <main className={styles.fullPage}>
        <JobTitleFrame />
        <section className={styles.section2}>
          <img
            className={styles.section2Child}
            loading="lazy"
            alt=""
            src="/group-41@2x.png"
          />
          <div className={styles.text}>
            <h2 className={styles.ourStory}>
              {" "}
              GIỚI THIỆU VỀ CÔNG TY DU LỊCH HANA GLOBAL TRAVEL{" "}
            </h2>
            <div className={styles.ourStoryAt}>
              Our story at Luxe Escapes is like a thrilling adventure book
              filled with passion and a strong desire to make travel
              extraordinary. We started because we love exploring amazing places
              and wanted to create special experiences that are more than just
              ordinary trips. Our team of travel experts is committed to making
              each journey unique and luxurious. Our story is all about paying
              attention to every detail, providing excellent service, and
              sharing the excitement of discovering the world`s most fantastic
              destinations. Come be a part of our journey, where every page is
              about making travel an art and enjoying the best experiences.
            </div>
          </div>
        </section>
        <VueSaxOutlineWhatsapp />
        <JobCards />
        <FrameComponent />
        <ContactUsForInquiries />
        <Footer3 />
      </main>
    </div>
  );
};

export default AboutUs;
