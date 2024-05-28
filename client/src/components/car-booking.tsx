import type { NextPage } from 'next';
import styles from './car-booking.module.css';
import { useState } from 'react';
import FormInput from './form-input';
import { Button } from '@mui/material';
import axios from 'axios';

interface CarBookingProps {
	id:string
	companyName: string;
	carModel: string;
	rentalPrice: number;
	availableCars: number;
	imgSrc: string;
	numberOfRentalDays: number;
}

const CarBooking: NextPage<CarBookingProps> = ({ id,companyName, carModel, rentalPrice, availableCars, imgSrc, numberOfRentalDays }) => {
	const serverURL = process.env.SERVER_URL || "";
    const accessToken = localStorage.getItem("access-token")
    const handleSubmit = async () => {
        try {
            const result = await axios.post(
                `${serverURL}/travel/book-service`,
                {
                    serviceId: id,
                    serviceType: "car-rental"
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
		<div className={styles.bookingCar}>
			<b className={styles.bookingCar1}>Booking car</b>
			<div className={styles.columns}>
				<div className={styles.rightColumn}>
					<div className={styles.frameParent}>
						<div className={styles.orderReviewWrapper}>
							<b className={styles.orderReview}>Order Review</b>
						</div>
						<div className={styles.frameGroup}>
							<div className={styles.hotelNameParent}>
								<b className={styles.hotelName}>Company Name:</b>
								<div className={styles.toyotaCorolla}>{companyName}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>Car Model:</b>
								<div className={styles.haNoi}>{carModel}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>Rental Price:</b>
								<div className={styles.haNoi}>{rentalPrice}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>Available Cars:</b>
								<div className={styles.haNoi}>{availableCars}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>Number of Rental Days:</b>
								<div className={styles.haNoi}>{numberOfRentalDays}</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.leftColumn}>
					<img className={styles.leftColumnChild} alt="" src={imgSrc} />
					
					<div className={styles.leftColumnInner}>
						<div className={styles.bookNowWrapper}>

							<Button
								onClick={handleSubmit}>
								<div className={styles.bookNow}>Book Now</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarBooking;
