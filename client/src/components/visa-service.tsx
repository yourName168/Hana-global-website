/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./visa-service.module.css"; // Assuming you have a styles module
import Button from "@mui/material/Button";

interface FrameParentProps {
  visaTitle: string;
  visaDescription: string;
  visaServiceImage: string;
  stayInformedContent: string;
  stayInformedImages: string[];
  luxuryHotelsTitle: string;
  luxuryHotelsDescription: string;
  luxuryHotelsImage: string;
}

const VisaService: React.FC<FrameParentProps> = ({
  visaTitle,
  visaDescription,
  visaServiceImage,
  stayInformedContent,
  stayInformedImages,
  luxuryHotelsTitle,
  luxuryHotelsDescription,
  luxuryHotelsImage,
}) => {
  return (
    <div className={styles["frame-parent"]}>
      <div className={styles["dch-v-visa-parent"]}>
        <div className={styles["dch-v-visa"]}>{visaTitle}</div>
        <div className={styles["chng-ti-cung-cp-cc-dch-v-parent"]}>
          <div className={styles["chng-ti-cung"]}>{visaDescription}</div>
          <Button
          href="/list-of-blog/?type=visa"
          sx={{
            border: "2px solid #09b5af",
          }}
        >
          <div className={styles["xem-cc-tour-wrapper"]}>Xem dịch vụ</div>
        </Button>
        </div>
        {/* Visa Service Image */}
        <img className={styles["frame-child"]} alt="" src={visaServiceImage} />
        <img className={styles["frame-item"]} alt="" src="/line-3.svg" />
      </div>
      <div className={styles["frame-group"]}>
        <div className={styles["frame-container"]}>
          <div className={styles["frame-div"]}>
            <div className={styles["parent"]}>
              <b className={styles["b"]}>02</b>
              <div className={styles["div"]}>/05</div>
            </div>
            <div className={styles["stay-informed-about-container"]}>
              <p className={styles["stay-informed-about"]}>
                {stayInformedContent}
              </p>
            </div>
          </div>
          <div className={styles["group-parent"]}>
            {/* Stay Informed Images */}
            {stayInformedImages.map((image, index) => (
              <img
                key={index}
                className={styles["frame-inner"]}
                alt=""
                src={image}
              />
            ))}
          </div>
        </div>
        <div className={styles["frame-parent1"]}>
          <div className={styles["rectangle-parent"]}>
            {/* Luxury Hotels Image */}
            <img
              className={styles["rectangle-icon"]}
              alt=""
              src={luxuryHotelsImage}
            />
            <div className={styles["frame-parent2"]}>
              <div className={styles["all-parent"]}>
                <div className={styles["all"]}>{luxuryHotelsTitle}</div>
                <b className={styles["the-best-luxury"]}>
                  {luxuryHotelsDescription}
                </b>
              </div>
              <div className={styles["experience-the-epitome"]}>
                {luxuryHotelsDescription}
              </div>
              <div className={styles["read-more-parent"]}>
                <div className={styles["read-more"]}>Read More</div>
                <img
                  className={styles["vuesaxoutlinearrow-right-icon"]}
                  alt=""
                  src="/vuesaxoutlinearrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles["frame-wrapper"]}>
            <div className={styles["ellipse-parent"]}>
              <div className={styles["ellipse-div"]}></div>
              <div className={styles["frame-child1"]}></div>
              <div className={styles["ellipse-div"]}></div>
              <div className={styles["ellipse-div"]}></div>
              <div className={styles["ellipse-div"]}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Line Image */}
      <img className={styles["line-icon"]} alt="" src="line-3.svg" />
    </div>
  );
};

export default VisaService;
