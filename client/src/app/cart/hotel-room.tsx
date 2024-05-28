import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './hotel-room.module.css';
import { Button } from '@mui/material';

interface HotelRoomProps {
	id: string;
}

interface HotelRoomData {
	hotelName: string;
	pricePerNight: number;
	availableRooms: number;
	imgSrc: string;
	location: string;
}

const HotelRoom: NextPage<HotelRoomProps> = ({ id }) => {
	const accessToken = localStorage.getItem("access-token")
	const serverURL = process.env.SERVER_URL as string;
	const [hotelRoomData, setHotelRoomData] = useState<HotelRoomData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		axios.get(`${serverURL}/travel/get-hotel-rooms/?id=${id}`,
		)
			.then((response) => {
				setHotelRoomData(response.data);
			})
			.catch((err) => {
				console.error("Error fetching hotel room data:", err);
				setError("Failed to load hotel room data.");
			});
	}, [id, serverURL]);

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	if (!hotelRoomData) {
		return <div className={styles.loading}>Loading...</div>;
	}

	const { hotelName, pricePerNight, availableRooms, imgSrc, location } = hotelRoomData;

	return (
		<div className={styles.frameParent}>
			<div
				className={styles.rectangleWrapper}
				style={{ backgroundImage: `url('/${imgSrc}')` }}
			>
				<div className={styles.frameChild} />
			</div>
			<div className={styles.frameWrapper}>
				<div className={styles.frameGroup}>
					<div className={styles.hotelNameParent}>
						<b className={styles.hotelName}>Hotel name:</b>
						<div className={styles.vinpearlResort}>{hotelName}</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.hotelName}>Location:</b>
						<div className={styles.phuQuoc}>{location}</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.hotelName}>Price per night:</b>
						<div className={styles.phuQuoc}>{pricePerNight.toLocaleString()} VND</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.hotelName}>Available rooms:</b>
						<div className={styles.phuQuoc}>{availableRooms}</div>
					</div>
				</div>
			</div>
			<div className={styles.frameContainer}>
				<div className={styles.frameDiv}>
					<div className={styles.serviceTypeParent}>
						<b className={styles.hotelName}>Service Type:</b>
						<div className={styles.phuQuoc}>Hotel room</div>
					</div>
				</div>
				<div className={styles.button}>
					<div className={styles.vuesaxoutlineinfoCircle} />
					
					<Button
						onClick={() => {
							axios.post(`${serverURL}/travel/cancel-book-service/`,
								{
									serviceId: id,
									serviceType:"hotel-room"
								},
								{
									headers: {
										Authorization: `Bearer ${accessToken}`
									}
								}
							).then(()=>{
                                window.location.reload()
                            })
						}}
					>
						<div className={styles.cancel}>Cancel</div>
					</Button>
					<div className={styles.vuesaxoutlineinfoCircle} />
				</div>
			</div>
		</div>
	);
};

export default HotelRoom;
