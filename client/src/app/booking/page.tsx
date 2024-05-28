'use client'
import type { NextPage } from "next";
import Footer from "../../components/footer";
import NavBar from "../../components/nav-bar";
import styles from "./booking.module.css";
import TourBooking from "@/components/tour-booking";
import CarBooking from "@/components/car-booking";
import HotelRoomBooking from "@/components/hotel-room-booking";
import FlightBooking from "@/components/flight-booking";
import { getQueryParam } from "@/utils/getQueryParam";
import { useEffect, useState } from "react";
import axios from "axios";

interface TourServiceData {
  destination: string;
  pricePerPerson: number;
  startDate: string;
  remainingSeats: number;
  period: number;
  title: string;
  blogId: string;
  imgSrc: string;
}

interface FlightServiceData {
  airline: string;
  flightNumber: string;
  departureDate: string;
  arrivalDate: string;
  departureAirport: string;
  arrivalAirport: string;
  price: number;
  availableSeats: number;
  imgSrc: string;
}

interface CarServiceData {
  companyName: string;
  carModel: string;
  rentalPrice: number;
  availableCars: number;
  imgSrc: string;
  numberOfRentalDays: number;
}

interface HotelServiceData {
  hotelName: string;
  pricePerNight: number;
  availableRooms: number;
  imgSrc: string;
  location: string;
}

const Booking: NextPage = () => {
  const query = getQueryParam(["type", "id"]);
  const { type, id } = query;
  const [queryRequest, setQueryRequest] = useState<string>("");
  const serverURL = process.env.SERVER_URL || "";
  const [serviceData, setServiceData] = useState<TourServiceData | FlightServiceData | CarServiceData | HotelServiceData | null>(null);

  useEffect(() => {
    if (type === "tour-booking") {
      setQueryRequest("get-tour-details");
    } else if (type === "flight-ticket") {
      setQueryRequest("get-flight-tickets");
    } else if (type === "car-rental") {
      setQueryRequest("get-car-rentals");
    } else if (type === "hotel-room") {
      setQueryRequest("get-hotel-rooms");
    }

    axios.get(`${serverURL}/travel/${queryRequest}/?id=${id}`)
      .then((res) => {
        setServiceData(res.data);
      })
      .catch((error) => {
        console.error("Error calling API:", error);
      });
  }, [type, queryRequest]);
  console.log(serviceData)
  return (
    <div className={styles.booking}>
      <main className={styles.fullPage}>
        <NavBar />
        {type === "tour-booking" && serviceData && (
          <div className="wrap-booking-form" style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            <TourBooking 
              id={id}
              {...(serviceData as TourServiceData)} />
          </div>
        )}
        {type === "car-rental" && serviceData && (
          <div className="wrap-booking-form" style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            <CarBooking 
            id={id}
            {...(serviceData as CarServiceData)} />
          </div>
        )}
        {type === "hotel-room" && serviceData && (
          <div className="wrap-booking-form" style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            <HotelRoomBooking 
            id={id}
            {...(serviceData as HotelServiceData)} />
          </div>
        )}
        {type === "flight-ticket" && serviceData && (
          <div className="wrap-booking-form" style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
            <FlightBooking 
            id={id}
            {...(serviceData as FlightServiceData)} />
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default Booking;
