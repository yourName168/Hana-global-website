/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./domestic-tourism.module.css";
import Button from "@mui/material/Button";
import axios from "axios";

interface TourProps {
  image: string;
  title: string;
  content: string;
  contenFileName: string;
  date: string;
  description: string;
  img: string;
  author: string;
  request: string;
}

const Tour: React.FC<TourProps> = ({
  image,
  title,
  content,
  contenFileName,
  date,
  description,
  img,
  author,
  request
}) => {
  return (
    <div className={styles["rectangle-parent"]}>
      <img className={styles["frame-child"]} alt="" src={`${image}.png`} />
      <div className={styles["frame-group"]}>
        <div className={styles["riviera-retreat-parent"]}>
          <b className={styles["riviera-retreat"]}>{title}</b>
          <div className={styles["indulge-in-the"]}>{content}</div>
        </div>

      </div>
      <div className={styles["c-thm-parent"]}>
        <Button
          href={`/blog-content/?contentFileName=${contenFileName}&title=${title}&date=${date}&description=${description}&img=${img}&author=${author}&request=${request}`}
          sx={{
            position: "relative",
            fontSize: "16px",
            color: "#09b5af",
          }}
          className={styles["c-thm-wrapper"]} // Apply your existing CSS class
        >
          <div className={styles["c-thm"]}>Đọc thêm</div>
          <img
            className={styles["vuesaxoutlinearrow-right-icon"]}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </Button>
      </div>
    </div>
  );
};

const DomesticTourism: React.FC = () => {
  const [listBlog, setListBlog] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);
  const serverURL=process.env.SERVER_URL

  useEffect(() => {
    axios.get(`${serverURL}/travel/get-domestic-blog`)
      .then((response) => {
        setListBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const shuffleArray = (array: any[]) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const randomBlogs = shuffleArray(listBlog).slice(0, 3);

  return (
    <div className={styles["section-3"]}>
      <div className={styles["du-lch-trong-nc-parent"]}>
        <b className={styles["du-lch-trong"]}>Du lịch trong nước</b>
        <div className={styles["khm-ph-cc"]}>
          Khám phá các danh lam thắng cảnh trong nước thông qua trải nghiệm du
          lịch được tuyển chọn của chúng tôi
        </div>
      </div>
      <div className={styles["frame-parent"]}>
        {randomBlogs.map((item) => (
          <Tour
            key={item._id}
            image={item.imgsrc}
            title={item.title}
            content={item.description}
            contenFileName={item.contenFileName}
            date={item.date}
            description={item.description}
            img={item.imgsrc}
            author={item.author}
            request="get-domestic-blog"
          />
        ))}
      </div>
      <Button
        href="/list-of-blog/?type=domestic"
        sx={{
          border: "2px solid #09b5af",
        }}
      >
        <div className={styles["xem-cc-tour-wrapper"]}>Xem Các tour</div>
      </Button>
    </div>
  );
};

export default DomesticTourism;
