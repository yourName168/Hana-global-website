/* eslint-disable react/jsx-no-undef */
import axios from "axios";
import { useEffect, useState } from "react";
import FollowUs from "../../const/follow-us";
import GetMoreArticle from "../../const/get-more-article";
import MiniPost from "../../const/mini-post";
import styles from "./blog-post.module.css";

interface PostContent {
  _id: string;
  title: string;
  date: string;
  description: string;
  imgsrc: string;
  author: string;
  contenFileName: string;
}

interface RightColumnProps {
  queryRequestString: string;
}

const RightColumn = ({ queryRequestString: request }: RightColumnProps) => {
  const [listBlog, setListBlog] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);
  const serverURL=process.env.SERVER_URL
  useEffect(() => {
    axios.get(`${serverURL}/travel/${request}`)
      .then((response) => {
        setListBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [request]);

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

  const randomBlogs = listBlog ? shuffleArray(listBlog).slice(0, 3) : [];

  return (
    <div className={styles["right-column"]}>
      <div className={styles["hana-global-trevel-mang-ti-ch-parent"]}>
        <div className={styles["bi-vit-lin-quan-parent"]}>
          <b className={styles["bi-vit-lin"]}>Bài viết liên quan</b>
          <div className={styles["line-div"]}></div>
        </div>
        {randomBlogs.map((item) => (
          <MiniPost
            key={item._id}
            title={item.title}
            date={item.date}
            description={item.description}
            img={item.imgsrc}
            author={item.author}
            contenFileName={item.contenFileName}
            request={request}
          />
        ))}
      </div>
      <div className={styles["frame-parent3"]}>
        <GetMoreArticle />
      </div>
      <div className={styles["frame-parent4"]}>
        <FollowUs />
      </div>
    </div>
  );
};

export default RightColumn;
