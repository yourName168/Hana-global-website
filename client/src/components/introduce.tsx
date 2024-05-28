/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./introduce.module.css";
import Button from "@mui/material/Button";

interface IntroduceProps {
  image: string; // Prop for the image source
  content: string; // Prop for the content
  title: string; // Prop for the title
  detailContent: string; // Prop for the detail content
}

const Introduce: React.FC<IntroduceProps> = ({
  image,
  content,
  title,
  detailContent,
}) => {
  return (
    <div className={styles.introduce}>
      <img className={styles["introduce-child"]} alt="" src={image} />{" "}
      {/* Using the image prop */}
      <div className={styles["gii-thiu-parent"]}>
        <div className={styles["gii-thiu"]}>{title}</div>{" "}
        {/* Using the title prop */}
        <div className={styles["frame-parent"]}>
          <div className={styles["khm-ph-th-gii-cng-cc-chu-parent"]}>
            <b className={styles["khm-ph-th"]}>{content}</b>{" "}
            <i className={styles["tri-nghim-chuyn"]}>{detailContent}</i>
            {/* Using the content prop */}
          </div>

          <Button
            href="/about-us"
            sx={{
              position: "relative",
              fontSize: "16px",
              color: "#09b5af",
              border: "2px solid #09b5af",
            }}
            className={styles["c-thm-wrapper"]} // Apply your existing CSS class
          >
            Đọc thêm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
