/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import type { NextPage } from "next";
import { getQueryParam } from "@/utils/getQueryParam";

import styles from "./service.module.css";
import { useEffect, useState } from "react";
import BookingForm from "@/components/booking-form";
import { FlightCardBooking } from "@/components/flight-card-booking";
import axios from "axios";
import HotelCardBooking from "@/components/hotel-room-card-booking";
import CarRentalCard from "@/components/car-rental-card-booking";
import Button from "@mui/material/Button";
const Service: NextPage = () => {
  const type = getQueryParam(["type"])
  localStorage.setItem("page-active", "service")
  const [queryRequest, setQueryRequest] = useState<string>("");
  const serverURL = process.env.SERVER_URL || ""; // Ensure to have a default value
  const [listService, setListService] = useState<any[]>([]);
  const [pagination, setPagination] = useState(0)
  const [title,setTitle]=useState("")
  const pageNumber = Math.ceil((listService as any).length / 9)
  useEffect(() => {
    if (type.type === "flight-ticket") {
      setQueryRequest("get-flight-tickets")
      setTitle("Đặt vé máy bay")
    } else if (type.type === "hotel-room") {
      setQueryRequest("get-hotel-rooms")
      setTitle("Đặt phòng khách sạn")
    } else if (type.type === "car-rental") {
      setQueryRequest("get-car-rentals")
      setTitle("Đặt xe")
    }
    axios.get(`${serverURL}/travel/${queryRequest}`)
      .then((res) => {
        setListService(res.data); 
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, [type]);

  return (
    <div className={styles["top-section"]}>
      <NavBar />
      <div className={styles["body"]}>
        <div className={styles.body}>
          <div className={styles.titlesParent}>
            <div className={styles.titles}>
              <b className={styles.tVMy}>{title}</b>
            </div>
            <div className={styles.cardsBody}>
              <div className={styles.cardsWrapper}>
                <div className={styles.cards}>
                  {queryRequest === "get-flight-tickets" && listService.slice(pagination * 9, (pagination + 1) * 9).map((flightCard) => (
                    <FlightCardBooking
                      {...flightCard}
                      _id={flightCard._id}
                    />
                  ))}
                  {queryRequest === "get-hotel-rooms" && listService.slice(pagination * 9, (pagination + 1) * 9).map((hotelRoom) => (
                    <HotelCardBooking
                      {...hotelRoom}
                      _id={hotelRoom._id}
                    />
                  ))}
                  {queryRequest === "get-car-rentals" && listService.slice(pagination * 9, (pagination + 1) * 9).map((carRental) => (
                    <CarRentalCard
                      {...carRental}
                      _id={carRental._id}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameGroup}>
                  <Button
                    onClick={() => pagination > 0 && setPagination(pagination - 1)}
                    disabled={pagination === 0}
                  >
                    <div className={styles.vuesaxoutlinearrowRightParent}>
                      <img
                        className={styles.vuesaxoutlinearrowRightIcon1}
                        alt=""
                        src="arrow-left.svg"
                      />
                      <div className={styles.bookNow}>{`Previous `}</div>
                    </div>
                  </Button>
                  <div className={styles.parent}>
                    {Array.from({ length: pageNumber }, (_, index) => (
                      <div
                        key={index}
                        className={pagination === index ? styles.wrapper : "normal"}
                        onClick={() => setPagination(index)}
                        style={{
                          cursor: "pointer",
                          fontWeight: pagination === index ? "bold" : "normal",
                        }}
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => pagination < pageNumber - 1 && setPagination(pagination + 1)}
                    disabled={pagination === pageNumber - 1}
                  >
                    <div className={styles.vuesaxoutlinearrowRightParent}>
                      <div className={styles.bookNow}>{`Next `}</div>
                      <img
                        className={styles.vuesaxoutlinelocationIcon}
                        alt=""
                        src="vuesaxoutlinearrowright.svg"
                      />
                    </div>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
