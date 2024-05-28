/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import styles from "./blog.module.css";
interface PostProps {
  key:string;
  title: string;
  date: string;
  description: string;
  img: string;
  author: string;
  contenFileName: string;
  request:string
}

const Post = (props: PostProps) => {
  const { key,title, date, description, img, author, contenFileName,request } = props;
  
  return (
    <div className={styles["rectangle-parent"]}>
      <img className={styles["rectangle-icon"]} alt="" src={`/${img}.png`} />
      <div className={styles["du-lch-hn-quc-ma-thu-parent"]}>
        <b className={styles["du-lch-hn"]}>{title}</b>
        <div className={styles["parent"]}>
          <div className={styles["tours"]}>{date}</div>
          <div className={styles["frame-child"]}>{author}</div>
        </div>
        <div className={styles["mang-ti-cho"]}>{description}</div>
        <Button
          className={styles["btn-read-more"]}
          onClick={() => {
            window.location.href = `/blog-content?contentFileName=${contenFileName}&title=${title}&date=${date}&description=${description}&img=${img}&author=${author}&request=${request}&id=${key}
            `;
          }}
        >
          <div className={styles["c-thm-parent"]}>
            <div className={styles["c-thm"]}>Đọc thêm</div>
            <img
              className={styles["vuesaxoutlinesearch-normal-icon"]}
              alt=""
              src="\vuesaxoutlinearrowright.svg"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Post;
