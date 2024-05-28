/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { getQueryParam } from "@/utils/getQueryParam";

import styles from "./blog.module.css";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";
import { useEffect, useState } from "react";
const Blog: NextPage = () => {
  // Sử dụng hook useSearchParams ở đây// Mặc định là "home" nếu không có query parameter
  const type = getQueryParam(["type"])
  localStorage.setItem("page-active", type.type === "visa" ? "visa" : "travel")
  const [queryRequest, setQueryRequest] = useState<string>("");

  useEffect(() => {
    let request;
    if (type.type === "travel") {
      request = "get-all-blog";
    } else if (type.type === "visa") {
      request = "get-visa-blog";
    } else if (type.type === "domestic") {
      request = "get-domestic-blog";
    } else {
      request = "get-foreign-blog";
    }
    setQueryRequest(request)
  },[type])
  return (
    <div className={styles["top-section"]}>
      <NavBar />
      <div className={styles["body"]}>
        <LeftColumn
          queryRequestString={queryRequest}
        />
        <RightColumn 
         queryRequestString={queryRequest}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
