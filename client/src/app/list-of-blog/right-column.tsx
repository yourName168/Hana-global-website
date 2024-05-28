/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react";
import FollowUs from "../../const/follow-us";
import GetMoreArticle from "../../const/get-more-article";
import MiniPost from "../../const/mini-post";
import styles from "./right-column.module.css";

interface LeftColumnProps {
  queryRequestString: string;
}

const RightColumn = ({ queryRequestString: request }: LeftColumnProps) => {
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

  const randomBlogs = shuffleArray(listBlog).slice(0, 3);

  return (
    <div className={styles["right-column"]}>
      <div className={styles["list-mini-post"]}>
        <div className={styles["bi-vit-gn-y-parent"]}>
          <b className={styles["bi-vit-gn"]}>Bài viết gần đây</b>
          <div className={styles["frame-inner"]}></div>
        </div>
        {randomBlogs.map((item) => (
          <MiniPost
            key={item._id} // Assuming each post has a unique id
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
      <GetMoreArticle />
      <FollowUs />
    </div>
  );
};

export default RightColumn;
