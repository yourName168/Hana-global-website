/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Input } from "@mui/material";
import React from "react";
import styles from "./box-comment-input.module.css"; // Đảm bảo bạn đã có module CSS tương ứng

const BoxCommentInput: React.FC = () => {
  const toggleBoxComment = () => {
    const wrapCommentBox = document.querySelector(
      "." + styles["wrap-comment-box"]
    ) as HTMLElement;
    if (wrapCommentBox) {
      const currentDisplay = window
        .getComputedStyle(wrapCommentBox)
        .getPropertyValue("display");
      wrapCommentBox.style.setProperty(
        "display",
        currentDisplay === "none" ? "flex" : "none"
      );
    }
  };

  return (
    <div className={styles["return-date-parent"]}>
      <Button
        sx={{
          position: "relative",
          fontSize: "16px",
          color: "#09b5af",
        }}
        className={styles["comment-button"]}
        onClick={toggleBoxComment}
      >
        <div className={styles["bnh-lun"]}>Bình luận</div>
        <img className={styles["chevron-icon"]} alt="" src="chevron.svg" />
      </Button>

      <div className={styles["wrap-comment-box"]}>
        <div className={styles["li-bnh-lun-parent"]}>
          <b className={styles["li-bnh-lun"]}>Để lại bình luận</b>
          <div className={styles["frame-child"]}></div>
        </div>
        <div className={styles["frame-group"]}>
          <div className={styles["frame-container"]}>
            <div className={styles["frame-div"]}>
              <div className={styles["tn-parent"]}>
                <div className={styles["tn"]}>Tên*</div>
                <div className={styles["frame-item"]}>
                  <Input
                    className={styles["input"]}
                    placeholder="   Nhập tên của bạn"
                  />
                </div>
              </div>
              <div className={styles["tn-parent"]}>
                <div className={styles["tn"]}>Email*</div>
                <div className={styles["frame-item"]}>
                  <Input
                    className={styles["input"]}
                    placeholder="   Nhập email của bạn"
                  />
                </div>
              </div>
            </div>
            <div className={styles["bnh-lun-parent"]}>
              <div className={styles["tn"]}>Bình luận*</div>
              <div className={styles["rectangle-div"]}>
                <Input
                  className={styles["input-comment"]}
                  placeholder="   Nội dung bình luận"
                  sx={{
                    position: "relative",
                    paddingLeft: "0",
                    "&::placeholder": {
                      position: "absolute",
                      top: "0",
                      left: "0",
                      paddingLeft: "10px", // Điều chỉnh khoảng cách bên trái nếu cần
                      color: "gray", // Màu của placeholder
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <Button
            sx={{
              position: "relative",
              fontSize: "16px",
              color: "#09b5af",
            }}
            className={styles["comment-button"]}
            onClick={toggleBoxComment}
          >
            <div className={styles["bnh-lun-wrapper"]}>
              <div className={styles["bnh-lun2"]}>Bình luận</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoxCommentInput;
