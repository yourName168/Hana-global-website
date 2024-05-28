/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./container-frame.module.css";

const ContainerFrame: NextPage = () => {
  return (
    <div className={styles.shapeFrame}>
      <div className={styles.orContinueWith}>Hoặc đăng nhập bằng</div>
      <div className={styles.socialMediaLogins}>
        <img
          className={styles.facebookIcon}
          loading="lazy"
          alt=""
          src="/facebook.svg"
        />
        <img
          className={styles.appleIcon}
          loading="lazy"
          alt=""
          src="/apple.svg"
        />
        <img
          className={styles.googleIcon}
          loading="lazy"
          alt=""
          src="/google.svg"
        />
      </div>
    </div>
  );
};

export default ContainerFrame;
