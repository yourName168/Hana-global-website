/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import type { NextPage } from "next";
import styles from "./header.module.css";
import Button from "@mui/material/Button";

const Header: NextPage = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-area"]}>
          <div className={styles["tri-nghim-s-sang-trng-tt-parent"]}>
            <i className={styles["tri-nghim-s"]}>
              Trải nghiệm sự sang trọng tột cùng với các chuyến tham quan của
              chúng tôi
            </i>
            <div className={styles["frame-parent"]}>
              <div className={styles["khm-ph-nhng-im-n-ngon-parent"]}>
                <i className={styles["khm-ph-nhng"]}>
                  Khám phá những điểm đến ngoạn mục và tận hưởng sự sang trọng
                  chưa từng có với các gói tour độc quyền của chúng tôi.
                </i>

                <Button
                  href="/tours"
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
              <div className={styles["subtract-parent"]}>
                <img
                  className={styles["subtract-icon"]}
                  alt=""
                  src="/rectangle-6@2x.png"
                />
                {/* <div className={styles["vuesaxoutlinearrow-right-parent"]}>
                  <img
                    className={styles["vuesaxoutlinearrow-right-icon"]}
                    alt=""
                    src="/vuesaxoutlinearrowright@2x.png"
                  />
                  <img
                    className={styles["subtract-icon1"]}
                    alt=""
                    src="/subtract.svg"
                  />
                  <div className={styles["tm-hiu-thm"]}>Tìm hiểu thêm</div>
                </div> */}
              </div>
            </div>
          </div>
          <img
            className={styles["header-area-child"]}
            alt=""
            src="line-3.svg"
          />
          <img
            className={styles["header-area-item"]}
            alt=""
            src="/rectangle-3@2x.png"
          />
        </div>
      </div>
      <div className={styles["banner"]}>
        <div className={styles["hana-global"]}>Hana Global</div>
        <div className={styles["hana-global1"]}>Hana Global</div>
        <div className={styles["hana-global2"]}>Hana Global</div>
        <div className={styles["hana-global3"]}>Hana Global</div>
        <div className={styles["hana-global4"]}>Hana Global</div>
        <img className={styles["vector-icon"]} alt="" src="Vector.svg" />
        <img className={styles["vector-icon1"]} alt="" src="Vector.svg" />
        <img className={styles["vector-icon2"]} alt="" src="Vector.svg" />
        <img className={styles["vector-icon3"]} alt="" src="Vector.svg" />
      </div>
    </>
  );
};

export default Header;
