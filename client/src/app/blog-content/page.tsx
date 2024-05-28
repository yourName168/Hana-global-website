/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
// ./src/app/blog-content/page.tsx

// Import useState from next instead of react
'use client'
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import { getQueryParam } from "@/utils/getQueryParam";
import styles from "./blog-post.module.css";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";

const BlogPost = () => {
  // const searchParams = useSearchParams()
  // const title = searchParams.get("title");
  // const date = searchParams.get("date");
  // const author = searchParams.get("author");
  // const fileName = searchParams.get("contentFileName") as string;
  // const title = "title";
  // const date = "date";
  // const author = "author";
  // const fileName = "CanTho.HTML";
  // const [repo, setRepo] = useState<Repo | null>(null);
  // const [loading, setLoading] = useState(true);
  // console.log(title);
  const getQuery = getQueryParam([
    "contentFileName",
    "title",
    "date",
    "description",
    "img",
    "author",
    "request",
    "id"
  ]);
  const title = getQuery.title;
  const date = getQuery.date;
  const author = getQuery.author;
  const fileName = getQuery.contentFileName;
  const request = getQuery.request
  const blogId = getQuery.id
  return (
    <div className={styles["top-section"]}>
      <NavBar />
      <div className={styles["body"]}>
        <div className={styles["wrap-title"]}>
          <p className={styles["content-route"]}>{title}</p>
        </div>
        <div className={styles["titles"]}>
          <div className={styles["hana-global-parent"]}>
            <div className={styles["tours"]}>{author}</div>
            <div className={styles["frame-child"]}></div>
            <div className={styles["tours"]}>{date}</div>
          </div>
        </div>
        <div className={styles["columns"]}>
          <LeftColumn 
          blogId={blogId}
          contentFileName={fileName}
          queryRequestString={request} />
          <RightColumn
            queryRequestString={request}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
