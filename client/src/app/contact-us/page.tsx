/* eslint-disable @next/next/no-img-element */
"use client"
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import React from "react";
import ContactComponent from "./contact-component";
 // Change the file path to "./ContactComponent" to match the actual file path

import styles from "./contacts.module.css"; // Make sure you have the corresponding CSS module
import Message from "./message"; // Change the file path to "./Message" to match the actual file path

const ContactUs: React.FC = () => {
  localStorage.setItem("page-active","contact")
  return (
    <div className={styles["top-section"]}>
      <NavBar
      />
      <div className={styles["body"]}>
        {/* contact */}
        <ContactComponent
          content="Bạn có thể dễ dàng liên hệ với chúng tôi qua điện thoại, email hoặc qua mạng xã hội. Các đồng nghiệp của chúng tôi rất mong muốn được nghe ý kiến, đề xuất và phê bình của bạn."
          title="Liên hệ với chúng tôi để biết thêm thông tin bạn cần"
          email="haan"
          phone="0987654321"
          address="Hà Nội, Việt Nam"
        />
        {/* message */}
        <Message 
        img="/rectangle-1543786028-1@2x.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
