import React from "react";
import styles from "./booking.module.css";
import Button from "@mui/material/Button";

interface Section8Props { }

const Section8: React.FC<Section8Props> = () => {
  return (
    <div className={styles["section-8"]}>
      <div className={styles["khm-ph-du-lch-cng-chng-t-wrapper"]}>
        <b className={styles["khm-ph-du"]}>Khám phá du lịch cùng chúng tôi</b>
      </div>
      <div className={styles["frame-parent"]}>
        <div >
          <Button
            href="/contact-us"
            sx={{
              width: 296,
              backgroundColor: "#09b5af",
              padding: 2,
              color: "#0a0a0a",
            }}
          >
            Liên hệ
          </Button>
        </div>
        <div >
          <Button
            href="/list-of-blog/?type=blog"
            sx={{
              width: 296,
              backgroundColor: "#09b5af",
              padding: 2,
              color: "#0a0a0a",
            }}
          >
            Xem các tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section8;
