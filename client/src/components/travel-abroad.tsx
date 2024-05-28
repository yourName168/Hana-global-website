/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./travel-abroad.module.css"; // Assuming you have a styles module
import Button from "@mui/material/Button";
import axios from "axios";

const AboradTravel: React.FC = () => {
  const [listBlog, setListBlog] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);
  const serverURL=process.env.SERVER_URL

  useEffect(() => {
    axios.get(`${serverURL}/travel/get-foreign-blog`)
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

  // Assuming you want to display only the first 4 blog posts
  const shuffledBlogs = shuffleArray(listBlog).slice(0, 4);
  console.log(shuffledBlogs)

  return (
    <div className={styles["section-4"]}>
      <div className={styles["frame-parent"]}>
        <div className={styles["du-lch-nc-ngoi-parent"]}>
          <b className={styles["du-lch-nc"]}>Du lịch nước ngoài</b>
          <div className={styles["khm-ph-th"]}>
            Khám phá thế giới thông qua trải nghiệm du lịch được tuyển chọn của
            chúng tôi
          </div>
        </div>
        <Button
          href="/list-of-blog/?type=foreign"
          sx={{
            border: "2px solid #09b5af",
          }}
        >
          <div className={styles["xem-cc-tour-wrapper"]}>Xem Các tour</div>
        </Button>
      </div>
      <div className={styles["rectangle-parent"]}>
        {/* Images */}
        <a
          href={`/blog-content/?contentFileName=${shuffledBlogs[0].contenFileName}&title=${shuffledBlogs[0].title}&date=${shuffledBlogs[0].date}&description=${shuffledBlogs[0].description}&img=${shuffledBlogs[0].imgsrc}&author=${shuffledBlogs[0].author}&request=get-foreign-blog`}
        >
          <img
            alt=""
            src={`/${shuffledBlogs[0].imgsrc}.png`}
            className={styles["group-child"]}
          />
        </a>

        <a
          href={`/blog-content/?contentFileName=${shuffledBlogs[1].contenFileName}&title=${shuffledBlogs[1].title}&date=${shuffledBlogs[1].date}&description=${shuffledBlogs[1].description}&img=${shuffledBlogs[1].imgsrc}&author=${shuffledBlogs[1].author}&request=get`}
        >
          <img
            alt=""
            src={`/${shuffledBlogs[1].imgsrc}.png`}
            className={styles["group-item"]}

          />
        </a>
        <a
          href={`/blog-content/?contentFileName=${shuffledBlogs[2].contenFileName}&title=${shuffledBlogs[2].title}&date=${shuffledBlogs[2].date}&description=${shuffledBlogs[2].description}&img=${shuffledBlogs[2].imgsrc}&author=${shuffledBlogs[2].author}&request=get`}
        >
          <img
            alt=""
            src={`/${shuffledBlogs[2].imgsrc}.png`}
            className={styles["group-inner"]}

          />
        </a>
        {/* Statistics */}
        <div className={styles["subtract-parent"]}>
          <a
            href={`/blog-content/?contentFileName=${shuffledBlogs[3].contenFileName}&title=${shuffledBlogs[3].title}&date=${shuffledBlogs[3].date}&description=${shuffledBlogs[3].description}&img=${shuffledBlogs[3].imgsrc}&author=${shuffledBlogs[3].author}&request=get`}
          >
            <img
              alt=""
              src={`/${shuffledBlogs[3].imgsrc}.png`}
              className={styles["subtract-icon"]}

            />
          </a>
          <div className={styles["frame-group"]}>
            <div className={styles["k-parent"]}>
              <b className={styles["k"]}>+2K</b>
              <div className={styles["khch-hng-hi"]}>Khách hàng hài lòng</div>
            </div>
            <div className={styles["k-parent"]}>
              <b className={styles["k"]}>+100</b>
              <div className={styles["khch-hng-hi"]}>Địa điểm hấp dẫn</div>
            </div>
          </div>
        </div>
      </div>
      {/* Destination titles */}
      <div className={styles["title-wrapper"]}>
        <b className={styles["title"]}>{`${shuffledBlogs[0].title}`}</b>
      </div>
      <div className={styles["title-container"]}>
        <b className={styles["title"]}>{`${shuffledBlogs[1].title}`}</b>
      </div>
      <div className={styles["title-frame"]}>
        <b className={styles["title"]}>{`${shuffledBlogs[2].title}`}</b>
      </div>
      <div className={styles["frame-div"]}>
        <b className={styles["title"]}>{`${shuffledBlogs[3].title}`}</b>
      </div>
    </div>
  );
};

export default AboradTravel;
