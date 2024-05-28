import { FC, useState } from "react";
import styles from "./post-content.module.css";

interface PostContentProps {
  contentFileName: string;
  queryRequestString:string
}

const PostContent: FC<PostContentProps> = ({ contentFileName,queryRequestString }) => {
  console.log(contentFileName)
  const[filePath,setFilePath]=useState<string>(`/Database/${contentFileName}`)

  
  // const filePath = `/Database/domestic_HTML/${contentFileName}`;
  return (
    <div className={styles.wrapContent}>
      <div >
        {/* Sử dụng dangerouslySetInnerHTML để hiển thị nội dung HTML */}
        <iframe
          src={filePath}
          style={{ border: "none", width: "100%", height: "100vh"}}
        ></iframe>
      </div>
    </div>
  );
};

export default PostContent;
