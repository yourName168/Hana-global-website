import type { NextPage } from 'next';
import styles from './hotel-room-booking.module.css';
import FormInput from './form-input';
import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

interface HotelRoomBookingProps {
	id:string
	hotelName: string;
	pricePerNight: number;
	availableRooms: number;
	imgSrc: string;
	location: string;
}

const HotelRoomBooking: NextPage<HotelRoomBookingProps> = ({ id,hotelName, pricePerNight, availableRooms, imgSrc, location }) => {
	const serverURL = process.env.SERVER_URL || "";
    const accessToken = localStorage.getItem("access-token")
    const handleSubmit = async () => {
        try {
            const result = await axios.post(
                `${serverURL}/travel/book-service`,
                {
                    serviceId: id,
                    serviceType: "hotel-room"
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
			<b className={styles.bookingHotelRoom}>Đặt phòng khách sạn</b>
			<div className={styles.columns}>
				<div className={styles.rightColumn}>
					<div className={styles.frameParent}>
						<div className={styles.orderReviewWrapper}>
							<b className={styles.orderReview}>Thông tin</b>
						</div>
						<div className={styles.frameGroup}>
							<div className={styles.hotelNameParent}>
								<b className={styles.hotelName}>Tên khách sạn:</b>
								<div className={styles.vinpearlResort}>{hotelName}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>vị trí:</b>
								<div className={styles.phuQuoc}>{location}</div>
							</div>
							<div className={styles.locationParent}>
								<b className={styles.hotelName}>giá / đêm:</b>
								<div className={styles.phuQuoc}>{pricePerNight}</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.leftColumn}>
					<img className={styles.leftColumnChild} alt="" src={imgSrc} />
					
					<div className={styles.leftColumnInner1}>
						<div className={styles.bookNowWrapper}>
							<Button
								onClick={handleSubmit}>
								<div className={styles.bookNow}>Đặt ngay</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelRoomBooking;
