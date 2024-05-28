'use client'
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Tour from "./tour-in-cart";
import FlightTicket from "./flight-ticket";
import Car from "./car";
import HotelRoom from "./hotel-room";
import styles from "./cart.module.css";
import React from "react";

const Service: NextPage = () => {
  const serverURL = process.env.SERVER_URL;
  const accessToken = localStorage.getItem("access-token");
  const [listService, setListService] = useState([]);

  useEffect(() => {
    if (serverURL && accessToken) {
      axios.get(`${serverURL}/users/get-booking`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setListService(res.data);
      })
      .catch((error) => {
        console.error("Error fetching booking data:", error);
      });
    }
  }, [serverURL, accessToken]);

  return (
    <div className={styles["top-section"]}>
      <NavBar />
      <div className={styles.body}>
        <div className={styles.titlesParent}>
          <div className={styles.titles}>
            <b className={styles.ccDchV}>Các dịch vụ đã đặt</b>
            <div className={styles.bnPhaCng}>Bên phía công ty sẽ liên hệ để xác nhận đơn hàng và yêu cầu thanh toán trong thời gian ngắn nhất</div>
          </div>
          <div className={styles.cardsBody}>
            <div className={styles.cardsParent}>
              {listService.map((service) => (
                <React.Fragment >
                  {service.tourId && <Tour id={service.tourId} />}
                  {service.flightId && <FlightTicket id={service.flightId} />}
                  {service.carId && <Car id={service.carId} />}
                  {service.hotelRoomId && <HotelRoom id={service.hotelRoomId} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
