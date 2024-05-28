/* eslint-disable @next/next/no-img-element */
'use client'
import { SocailMedia } from "@/const/follow-us";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "./footer.module.css";
import FrameFrameFrame from "./frame-frame-frame";

const Footer: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInformation}>
        <FrameFrameFrame
          vuesaxoutlinesms="/vuesaxoutlinesms.svg"
          email="Email"
          getInTouchWithUsForAnyInq="Hãy liên hệ với chúng tôi nếu có bất kỳ thắc mắc nào hoặc để đặt chuyến tham quan sang trọng tiếp theo của bạn."
          infoLuxeEscapescom="hanatravelglobal@gmail"
        />
        <FrameFrameFrame
          vuesaxoutlinesms="/vuesaxoutlinecall.svg"
          email="số điện thoại"
          getInTouchWithUsForAnyInq="Hãy gọi cho chúng tôi để nói chuyện với một trong những chuyên gia du lịch của chúng tôi và lên kế hoạch cho kỳ nghỉ mơ ước của bạn."
          infoLuxeEscapescom="0366768296"
        />
        <FrameFrameFrame
          vuesaxoutlinesms="/vuesaxoutlinelocation.svg"
          email="Office"
          getInTouchWithUsForAnyInq="Bạn có thể qua công ty để trực tiếp nhận được sự tư vấn tốt nhất"
          infoLuxeEscapescom="Ngõ 68 Đồng Me, Quận Nam Từ Liêm, Thành phố Hà Nội."
        />
      </div>
      <div className={styles.buttomSection}>
        <div className={styles.subscribeNewsletterParent}>
          <div className={styles.subscribeNewsletter}>
            <b className={styles.subscribeNewsletter1}>Để biết thêm thông tin</b>
            <div className={styles.getExclusiveUpdates}>
              Vui lòng để lai email của bạn để nhận thông tin cập nhật mới nhất
            </div>
          </div>
          <div className={styles.enteryouremail}>
            <input
              className={styles.input}
              placeholder="Nhập email của bạn"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button className={styles.button}>
              <img className={styles.vuesaxoutlineinfoCircleIcon} alt="" />
              <div className={styles.subscribe}>Gửi</div>
              <img className={styles.vuesaxoutlineinfoCircleIcon} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.luxeEscapes}>
          <b className={styles.luxeEscapes1}>HANA GLOBAL</b>
          <div className={styles.luxeEscapesAll}>
          Hana Global xin mang tới những dịch vụ tốt nhất cho quý khách
          </div>
          <div className={styles.subscribeFrame}>
           <SocailMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
