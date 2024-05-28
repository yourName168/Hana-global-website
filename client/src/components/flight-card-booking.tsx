import type { NextPage } from 'next';
import styles from './flight-card-booking.module.css';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

interface FlightCard {
  _id: string;
  airline: string;
  flightNumber: string;
  departureDate: Date;
  arrivalDate: Date;
  departureAirport: string;
  arrivalAirport: string;
  price: number;
  availableSeats: number;
  imgSrc: string;
}

export const FlightCardBooking: NextPage<FlightCard> = (props) => {
  const {
    _id,
    airline,
    flightNumber,
    departureDate,
    arrivalDate,
    departureAirport,
    arrivalAirport,
    price,
    availableSeats,
    imgSrc
  } = props;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB'); // Format date to 'DD/MM/YYYY'
  };
  return (
    <div className={styles.card}>
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src={imgSrc} />
        <div className={styles.frameParent}>
          <div className={styles.vuesaxoutlinelocationParent}>
            <img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlinelocation.svg" />
            <div className={styles.fromSgnTo}>From {departureAirport} To {arrivalAirport}</div>
          </div>
          <div className={styles.vuesaxoutlinelocationParent}>
            <img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlineprofile2user.svg" />
            <div className={styles.fromSgnTo}>Available: {availableSeats}</div>
          </div>
          <div className={styles.vuesaxoutlinelocationParent}>
            <img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlineclock.svg" />
            <div className={styles.fromSgnTo}>From {formatDate(new Date(departureDate))}</div>
          </div>
          <div className={styles.vuesaxoutlinelocationParent}>
            <img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlineclock.svg" />
            <div className={styles.fromSgnTo}>To {formatDate(new Date(arrivalDate))}</div>
          </div>
        </div>
      </div>
      <div className={styles.titleAndTextParent}>
        <div className={styles.titleAndText}>
          <b className={styles.title}>{flightNumber} - {airline}</b>
        </div>
        <div className={styles.titleParent}>
          <b className={styles.title}>{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}/ vé</b>
          <div className={styles.bookNowParent}>
            <Button href={`./booking/?type=flight-ticket&id=${_id}`}
              style={{ color: "#09b5af" }}>
              <div className={styles.bookNow}>Book now</div>
              <img className={styles.vuesaxoutlinearrowRightIcon} alt="" src="vuesaxoutlinearrowright.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
