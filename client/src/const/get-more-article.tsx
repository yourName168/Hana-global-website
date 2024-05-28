import { Button, Input } from "@mui/material";
import styles from "./get-more-article.module.css";
const GetMoreArticle = () => {
  return (
    <div className={styles["frame-container"]}>
      <div className={styles["t-li-email-nhn-nhng-bi-parent"]}>
        <b className={styles["t-li-email"]}>
          Đặt lại email để nhận những bài viết mới nhất
        </b>
        <div className={styles["frame-inner"]}></div>
      </div>
      <div className={styles["input-parent"]}>
        <div className={styles["input"]}>
          <Input
            className={styles["input"]}
            placeholder="   Nhập email của bạn"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
              fontSize: "16px",
              color: "#000000",
              padding: 0,
              margin: 0,
            }}
          />
        </div>
        <div className={styles["button"]}>
          <Button
            sx={{
              position: "relative",
              fontSize: "16px",
              color: "#09b5af",
              padding: 0,
              margin: 0,
              colorAdjust: "",
            }}
            className={styles["comment-button"]}
          >
            <div className={styles["bnh-lun-wrapper"]}>
              <div className={styles["regitster"]}>Đăng kí</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default GetMoreArticle;
