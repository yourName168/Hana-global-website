import type { NextPage } from 'next';
import styles from './flight-booking.module.css';
import FormInput from './form-input';
import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

interface FlightBookingProps {
	id:string;
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

const FlightBooking: NextPage<FlightBookingProps> = ({ id,airline, flightNumber, departureDate, arrivalDate, departureAirport, arrivalAirport, price, availableSeats, imgSrc }) => {
	const serverURL = process.env.SERVER_URL || "";
    const accessToken = localStorage.getItem("access-token")
    const handleSubmit = async () => {
        try {
			const result = await axios.post(
                `${serverURL}/travel/book-service`,
                {
                    serviceId: id,
                    serviceType: "flight-ticket"
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            window.location.href="./cart"
        } catch (error) {
            alert("vui lòng đăng nhập để đặt dịch vụ")
			window.location.href="./login"
        }
    }

	return (
		<div className={styles.body}>
			<b className={styles.bookingFlightTicket}>Đặt vé máy bay</b>
			<div className={styles.columns}>
				<div className={styles.rightColumn}>
					<div className={styles.frameParent}>
						<div className={styles.orderReviewWrapper}>
							<b className={styles.orderReview}>Thông tin</b>
						</div>
						<div className={styles.frameGroup}>
							<div className={styles.airlineParent}>
								<b className={styles.airline}>Hãng hàng không:</b>
								<div className={styles.vietnamAirline}>{airline}</div>
							</div>
							<div className={styles.airlineParent}>
								<b className={styles.airline}>Số hiệu:</b>
								<div className={styles.vietnamAirline}>{flightNumber}</div>
							</div>
							<div className={styles.airlineParent}>
								<b className={styles.airline}>Khởi hành:</b>
								<div className={styles.parent}>
									<div className={styles.div}>{new Date(departureDate).toLocaleTimeString()} {new Date(departureDate).toLocaleDateString()}</div>
									<div className={styles.div}>{departureAirport}</div>
								</div>
							</div>
							<div className={styles.airlineParent}>
								<b className={styles.airline}>Đến:</b>
								<div className={styles.parent}>
									<div className={styles.div}>{new Date(arrivalDate).toLocaleTimeString()} {new Date(arrivalDate).toLocaleDateString()}</div>
									<div className={styles.div}>{arrivalAirport}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.leftColumn}>
					<img className={styles.leftColumnChild} alt="" src={imgSrc} />
					
					<div className={styles.leftColumnInner}>
						<div className={styles.bookNowWrapper}>
							<Button onClick={handleSubmit}>
								<div className={styles.bookNow}>Đặt Ngay</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlightBooking;
