/* eslint-disable @next/next/no-img-element */
import styles from "./follow-us.module.css";
export const SocailMedia = () => {
  return (
    <div className={styles["vuesaxoutlineinstagram-parent"]}>
      <a href="https://www.instagram.com/">
        <img
          className={styles["avatar-icon"]}
          alt=""
          src="/vuesaxoutlineinstagram.svg"
        />
      </a>
      <a href="https://api.whatsapp.com/send?phone=%2B84833682682&context=ARDHsU3s5n9K5l-3GREtmSx92vw6baBdhbTFj8Btio6Sa9_9i5qCDq8IdJ_PzbaMKCAwaDJmc323n7x_maGLv8YdKPe6Dennt1B3vn-JQuP4wI45a7Go6Cz0zQhl_BwWameJjRcQpPSxpCxMYu4m5gUBHA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0_YkYlD91YUVzQQifWZD7XCT7SeCULhtyno15R1eizYcN6a7Rf30dReLg_aem_AQC2nfRSrZdygD8ylftA4pMSf8GDfheXQx1iEFxxKBos5gKuIzwwYduMDyyeV-0OFSPBbQlevldw1tFy0Ck778s-">
        <img
          className={styles["avatar-icon"]}
          alt=""
          src="/vuesaxoutlinewhatsapp.svg"
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100049916066424">
        <img
          className={styles["avatar-icon"]}
          alt=""
          src="/vuesaxoutlinefacebook.svg"
        />
      </a>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div className={styles["frame-parent1"]}>
      <div className={styles["t-li-email-nhn-nhng-bi-parent"]}>
        <b className={styles["bi-vit-gn"]}>Theo dõi</b>
        <div className={styles["frame-inner"]}></div>
      </div>
      <SocailMedia />
    </div>
  );
};
export default FollowUs;
