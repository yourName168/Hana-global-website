import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './car.module.css';
import { Button } from '@mui/material';

interface CarProps {
	id: string;
}

interface CarData {
	companyName: string;
	carModel: string;
	rentalPrice: number;
	availableCars: number;
	imgSrc: string;
	numberOfRentalDays: number;
	location: string;
	seats: number;
}

const Car: NextPage<CarProps> = ({ id }) => {
	const accessToken = localStorage.getItem("access-token")

	const serverURL = process.env.SERVER_URL as string;
	const [carData, setCarData] = useState<CarData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		axios.get(`${serverURL}/travel/get-car-rentals/?id=${id}`)
			.then((response) => {
				setCarData(response.data);
			})
			.catch((err) => {
				console.error("Error fetching car data:", err);
				setError("Failed to load car data.");
			});
	}, [id, serverURL]);

	if (error) {
		return <div className={styles.error}>{error}</div>;
	}

	if (!carData) {
		return <div className={styles.loading}>Loading...</div>;
	}

	const { companyName, carModel, rentalPrice, availableCars, imgSrc, numberOfRentalDays, location, seats } = carData;

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
					<div className={styles.carNameParent}>
						<b className={styles.carName}>Car name:</b>
						<div className={styles.toyotaCorolla}>{carModel}</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.carName}>Location:</b>
						<div className={styles.haNoi}>{location}</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.carName}>Seats:</b>
						<div className={styles.haNoi}>{seats}</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.carName}>Number of rental days:</b>
						<div className={styles.haNoi}>{numberOfRentalDays}D</div>
					</div>
					<div className={styles.locationParent}>
						<b className={styles.carName}>Price:</b>
						<div className={styles.haNoi}>{rentalPrice.toLocaleString()} VND</div>
					</div>
				</div>
			</div>
			<div className={styles.frameContainer}>
				<div className={styles.frameDiv}>
					<div className={styles.serviceTypeParent}>
						<b className={styles.carName}>Service Type:</b>
						<div className={styles.haNoi}>Car rental</div>
					</div>
				</div>
				<div className={styles.button}>
					<div className={styles.vuesaxoutlineinfoCircle} />
					<Button
						onClick={() => {
							axios.post(`${serverURL}/travel/cancel-book-service/`,
								{
									serviceId: id,
									serviceType:"car-rental"
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

export default Car;
