/* eslint-disable @next/next/no-img-element */
'use client'

import FeedBack from "@/components/feed-back-component";
import Footer from "@/components/footer";
import Introduce from "@/components/introduce";
import NavBar from "@/components/nav-bar";
import type { NextPage } from "next";
import Booking from "../components/booking";
import DomesticTourism from "../components/domestic-tourism";
import Header from "../components/header";
import TravelAbroad from "../components/travel-abroad";
import VisaService from "../components/visa-service";
import WhyUS from "../components/why-us";
import styles from "./home-page.module.css";
localStorage.setItem("page-active", "home")
const Homepage: NextPage = () => {

  return (
    <main className={styles.fullPage}>
      <NavBar
      />
      <Header />
      <Introduce
        image="/group-4@2x.png"
        content="Khám phá thế giới cùng các chuyến du lịch cùng chúng tôi."
        title="Giới thiệu"
        detailContent="Trải nghiệm chuyến du lịch sang trọng đỉnh cao với các tour du lịch độc quyền của chúng tôi. Từ những điểm đến ngoạn mục đến hành trình được cá nhân hóa, chúng tôi mang đến một hành trình thực sự khó quên."
      />
      <DomesticTourism />
      <TravelAbroad />
      {/* <VisaService
        visaTitle="DỊch vụ VISA"
        visaDescription="Chúng tôi cung cấp các dịch vụ visa nhanh chóng và tiện ích"
        visaServiceImage="path/to/visaServiceImage.png" // Specify the path to your visa service image
        stayInformedContent="Stay informed about luxury travel and the tourism industry."
        stayInformedImages={["/group-3.svg", "/group-2.svg"]} // Specify the paths to your stay informed images
        luxuryHotelsTitle="The Best Luxury Hotels Around the World"
        luxuryHotelsDescription="Experience the epitome of luxury in these breathtaking hotels."
        luxuryHotelsImage="/rectangle-17472@2x.png" // Specify the path to your luxury hotels image
      /> */}
     
      <FeedBack
        feedback={{
          customerImgage: "/ellipse-3@2x.png",
          name: "John Doe",
          position: "CEO, ABC Company",
          rating: 5, // Assuming a rating out of 5 stars
          comment:
            "Chuyến đi của chúng tôi với công ty du lịch này thật tuyệt vời! Chỗ ở là hàng đầu, hướng dẫn viên du lịch có kiến ​​thức và thân thiện, và toàn bộ trải nghiệm diễn ra liền mạch từ đầu đến cuối. Rất khuyến khích!",
        }}
      />
      <Booking />
      <Footer />
    </main>
  );
};

export default Homepage;
