import type { NextPage } from 'next';
import styles from './car-rental-card-booking.module.css';
import Button from '@mui/material/Button';

interface CarRentalCardProps {
	_id: string;
	companyName: string;
	carModel: string;
	rentalPrice: number;
	availableCars: number;
	imgSrc: string;
	numberOfRentalDays: number;
}

export const CarRentalCard: NextPage<CarRentalCardProps> = (props) => {
	const {
		_id,
		companyName,
		carModel,
		rentalPrice,
		availableCars,
		imgSrc,
		numberOfRentalDays
	} = props;
	console.log(imgSrc)
	return (
		<div className={styles.card}>
			<div className={styles.frameParent}>
				<div className={styles.frameGroup}>
					<div className={styles.frameContainer}>
						<div className={styles.vuesaxoutlinelocationParent}>
							<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlinelocation.svg" />
							<div className={styles.haNoi}>{companyName}</div>
						</div>
						<div className={styles.vuesaxoutlineprofile2userParent}>
							<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlineprofile2user.svg" />
							<div className={styles.haNoi}>Xe còn: {availableCars}</div>
						</div>
					</div>
					<div className={styles.vuesaxoutlinelocationGroup}>
						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesaxoutlinelocation.svg" />
					</div>
				</div>
				<img className={styles.groupChild} alt={`${carModel} image`} src={imgSrc} />
			</div>
			<div className={styles.titleAndTextParent}>
				<div className={styles.titleAndText}>
					<b className={styles.title}>{carModel}</b>
				</div>
				<div className={styles.titleParent}>
					<b className={styles.title}>{rentalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}/ {numberOfRentalDays} ngày</b>
					<div className={styles.rentNowParent}>
						<Button href={`./booking/?type=car-rental&id=${_id}`}
						style={{color:"#84DAD7"}}
						>
							<div className={styles.rentNow}>Thuê Ngay</div>
							<img className={styles.vuesaxoutlinearrowRightIcon} alt="" src="vuesaxoutlinearrowright.svg" />
						</Button>
					</div>
				</div>
			</div>
		</div>



	);
};

export default CarRentalCard;