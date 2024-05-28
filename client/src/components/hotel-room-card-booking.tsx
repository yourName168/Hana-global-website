import type { NextPage } from 'next';
import styles from './hotel-room-card-booking.module.css';
import { Button } from '@mui/material';
interface HotelRoomType {
	_id: string;
	hotelName: string;
	pricePerNight: number;
	availableRooms: number;
	imgSrc: string;
	location: string;
}
const HotelCardBooking: NextPage<HotelRoomType> = (props) => {
	const {
		_id,
		hotelName,
		pricePerNight,
		availableRooms,
		imgSrc,
		location
	} = props;
	const price = (pricePerNight * 22400).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
	return (
		<div className={styles.card}>
			<div className={styles.frameParent}>
				<div className={styles.frameGroup}>
					<div className={styles.vuesaxoutlinelocationParent}>
						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlinelocation.svg" />
						<div className={styles.location}>{location}</div>
					</div>
					<div className={styles.vuesaxoutlinelocationParent}>
						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlineprofile2user.svg" />
						<div className={styles.availableRooms}>chỗ còn lại: {availableRooms}</div>
					</div>
				</div>
				<img className={styles.groupChild} alt={`${hotelName} image`} src={imgSrc} />
			</div>
			<div className={styles.titleAndTextParent}>
				<div className={styles.titleAndText}>
					<b className={styles.title}>{hotelName}</b>
				</div>
				<div className={styles.titleParent}>
					<b className={styles.price}>{price}/ đêm</b>
					<div className={styles.bookNowParent}>
						<Button href={`./booking/?type=hotel-room&id=${_id}`}
						style={{color:"#84DAD7"}}
						>
							<div className={styles.bookNow}>Book now</div>
							<img className={styles.vuesaxoutlinearrowRightIcon} alt="" src="vuesaxoutlinearrowright.svg" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelCardBooking;
