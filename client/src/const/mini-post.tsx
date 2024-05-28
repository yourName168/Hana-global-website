/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import styles from "./mini-post.module.css";

interface MiniPostProps {
  img: string;
  // alt: string;
  title: string;
  date: string;
  // comments: string;
  contenFileName: string;
  description: string;
  author: string;
  request: string;
}

const MiniPost: React.FC<MiniPostProps> = ({
  img,
  // alt,
  title,
  date,
  // comments,
  contenFileName,
  description,
  author,
  request,
}) => {
  return (
    <Button
      href={`/blog-content?contentFileName=${contenFileName}&title=${title}&date=${date}&description=${description}&img=${img}&author=${author}&request=${request}`}
      className={styles["wrap-mini-post"]}
      sx={{
        textTransform: "none",
        position: "relative",
        fontSize: "16px",
        color: "black",
      }}
    >
      <div className={styles["rectangle-parent1"]}>
        <img className={styles["frame-child13"]} alt={title} src={`${img}.png`} />
        <div className={styles["du-lch-hn-quc-ma-thu-parent2"]}>
          <b className={styles["du-lch-hn4"]}>{title}</b>
          <div className={styles["parent2"]}>
            <div className={styles["tours"]}>{date}</div>
            <div className={styles["frame-child"]}></div>
            {/* <div className={styles["tours"]}>{comments}</div> */}
          </div>
        </div>
      </div>
    </Button>
  );
};

export default MiniPost;
