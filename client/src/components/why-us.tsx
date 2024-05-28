/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./why-us.module.css"; // Assuming you have a styles module

interface Section5Props {
  title: string;
  description: string;
  content: string;
  descriptionImg: string;
  detailContent: string[];
}

const WhyUS: React.FC<Section5Props> = ({
  title,
  description,
  content,
  descriptionImg,
  detailContent,
}) => {
  return (
    <div className={styles["section-5"]}>
      <img className={styles["section-5-child"]} alt="" src={descriptionImg} />
      <div className={styles["why-us-parent"]}>
        <div className={styles["why-us"]}>{title}</div>
        <div className={styles["frame-parent"]}>
          <div className={styles["chng-ti-cung-cp-cc-dch-v-parent"]}>
            <b className={styles["chng-ti-cung"]}>{description}</b>
            {/* Additional content */}
            <div className={styles["khm-ph-th-gii-cng-cc-chu-parent"]}>
              <b className={styles["khm-ph-th"]}>{content}</b>
            </div>
          </div>
          <div className={styles["frame-group"]}>
            {detailContent.map((content, index) => (
              <i key={index} className={styles["tri-nghim-chuyn"]}>
                {content}
              </i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
