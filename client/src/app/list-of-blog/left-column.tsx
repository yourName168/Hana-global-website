import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./blog.module.css";
import Post from "./post";
import { getQueryParam } from "@/utils/getQueryParam";
import { Button } from "@mui/material";

interface LeftColumnProps {
  queryRequestString: string;
}

const LeftColumn = ({ queryRequestString: request }: LeftColumnProps) => {
  const [listBlog, setListBlog] = useState<PostContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(0)
  const pageNumber = Math.ceil(listBlog.length / 5)
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
  }, [request]) // Added typeBlog and queryRequest to the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["left-column"]}>
      {/* Render blog posts */}
      <div className={styles["frame-parent"]}>
        {/* Title */}
        <div className={styles["tt-c-bi-vit-parent"]}>
          <b className={styles["tt-c-bi"]}>Tất cả bài viết</b>
          <div className={styles["frame-inner"]}></div>
        </div>
        {/* List of posts */}
        {listBlog && listBlog.slice(pagination * 5, (pagination + 1) * 5).map((item) => (
          <Post
            key={item._id as string} // Assuming each post has a unique id
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
      {/* Other elements */}
      <div className={styles["group-parent"]}>
        <Button onClick={() => {
          if (pagination !== 0) setPagination(pagination - 1)
        }}>
          <img className={styles["group-icon"]} alt="" src="/group-3.svg" />
        </Button >
        <div className={styles["ellipse-parent"]}>
          <div className={styles[pagination !== 0 ? "ellipse-div" : "frame-child7"]}></div>
          <div className={styles[(pagination !== 0 && pagination !== pageNumber-1) ? "frame-child7" : "ellipse-div"]}></div>
          <div className={styles[pagination !== pageNumber - 1 ? "ellipse-div" : "frame-child7"]}></div>
        </div>
        <Button onClick={() => {
          if (pagination !== pageNumber - 1) setPagination(pagination + 1)
        }}>
          <img className={styles["group-icon"]} alt="" src="/group-2.svg" />
        </Button>
      </div>
    </div>
  );
};

export default LeftColumn;


