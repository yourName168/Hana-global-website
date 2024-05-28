/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./feed-back-component.module.css"; // Assuming you have a styles module

interface Feedback {
  name: string;
  position: string;
  rating: number;
  comment: string;
  customerImgage: string;
}

interface Section7Props {
  feedback: Feedback;
}

const CustomerFeedback: React.FC<Section7Props> = ({ feedback }) => {
  const { name, position, rating, comment,customerImgage } = feedback;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} className={styles["vuesaxboldmagic-star-icon"]} alt="" src="/vuesaxboldmagicstar@2x.png" />);
      } else {
        stars.push(<img key={i} className={styles["vuesaxboldmagic-star-icon"]} alt="" src="/vuesaxboldmagicstar@2x.png" />);
      }
    }
    return stars;
  };

  return (
    <div className={styles["section-7"]}>
      <b className={styles["nhng-phn-hi"]}>Những phản hồi của khách hàng</b>
      <div className={styles["group-parent"]}>
        <img className={styles["frame-child"]} alt="" src="/group-3.svg" />
        <div className={styles["frame-parent"]}>
          <div className={styles["frame-group"]}>
            <div className={styles["ellipse-parent"]}>
              <img className={styles["frame-item"]} alt="" src={customerImgage} />
              <div className={styles["john-doe-parent"]}>
                <div className={styles["john-doe"]}>{name}</div>
                <div className={styles["ceo-abc-company"]}>{position}</div>
              </div>
            </div>
            <div className={styles["vuesaxboldmagic-star-parent"]}>
              {renderStars()}
            </div>
          </div>
          <div className={styles["chuyn-i-ca"]}>{comment}</div>
        </div>
        <img className={styles["frame-child"]} alt="" src="/group-2.svg" />
      </div>
    </div>
  );
};

export default CustomerFeedback;
