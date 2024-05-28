/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./blog-post.module.css";
import BoxCommentInput from "./box-comment-input";
import PostContent from "./post-content";
import { Button } from "@mui/material";

interface LeftColumnProps {
  blogId:string
  contentFileName: string;
  queryRequestString: string
}

const LeftColumn: FC<LeftColumnProps> = ({ contentFileName, queryRequestString,blogId }) => {
  return (
    <div className={styles["left-column"]}>
      <div className={styles["frame-parent"]}>
        {/* Nội dung bài viết */}
        <PostContent contentFileName={contentFileName}
          queryRequestString={queryRequestString} />
        {/* Chia sẻ */}
        <div className={styles["chia-s-ba-vit-ny-parent"]}>
          <b className={styles["tours"]}>Chia sẻ bài viết này:</b>
          <div className={styles["vuesaxoutlineinstagram-parent"]}>
            <a href="https://www.instagram.com/">
              <img
                className={styles["avatar-icon"]}
                alt=""
                src="/vuesaxoutlineinstagram.svg"
              />
            </a>
            <a href="https://www.twitter.com/">
              <img
                className={styles["avatar-icon"]}
                alt=""
                src="/vuesaxoutlinewhatsapp.svg"
              />
            </a>
            <a href="https://www.facebook.com/">
              <img
                className={styles["avatar-icon"]}
                alt=""
                src="/vuesaxoutlinefacebook.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <Button
        sx={{
          position: "relative",
          fontSize: "16px",
          color: "#09b5af",
          background:"#1111"
        }}
        className={styles["comment-button"]}
        onClick={()=>{
          window.location.href=`./booking?type=tour-booking&id=${blogId}`
        }}
      >
        <div className={styles["bnh-lun"]}>Đặt vé ngay</div>
      </Button>
      {/* Bình luận */}
      {/* <BoxCommentInput /> */}
    </div>
  );
};

export default LeftColumn;
