import type { NextPage } from 'next';
import styles from './booking-form.module.css';


const BookingForm:NextPage = () => {
  	return (
    		<div className={styles.bookingForm}>
      			<b className={styles.bookYourDream}>Book Your Dream Journey Now!</b>
      			<div className={styles.dropDownLocationParent}>
        				<div className={styles.dropDownLocation}>
          					<div className={styles.vuesaxoutlinelocationParent}>
            						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesax/outline/location.svg" />
            						<div className={styles.destination}>Destination</div>
          					</div>
          					<img className={styles.chevronIcon} alt="" src="chevron.svg" />
        				</div>
        				<div className={styles.dropDownLocation}>
          					<div className={styles.vuesaxoutlinelocationParent}>
            						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesax/outline/profile-2user.svg" />
            						<div className={styles.destination}>No. of People</div>
          					</div>
          					<img className={styles.chevronIcon} alt="" src="chevron.svg" />
        				</div>
        				<div className={styles.dropDownLocation}>
          					<div className={styles.vuesaxoutlinelocationParent}>
            						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesax/outline/calendar.svg" />
            						<div className={styles.destination}>Checkin Date</div>
          					</div>
          					<img className={styles.chevronIcon} alt="" src="chevron.svg" />
        				</div>
        				<div className={styles.dropDownLocation}>
          					<div className={styles.vuesaxoutlinelocationParent}>
            						<img className={styles.vuesaxoutlinelocationIcon} alt="" src="vuesax/outline/clock.svg" />
            						<div className={styles.destination}>Tour Duration</div>
          					</div>
          					<img className={styles.chevronIcon} alt="" src="chevron.svg" />
        				</div>
        				<div className={styles.searchWrapper}>
          					<div className={styles.search}>Search</div>
        				</div>
      			</div>
    		</div>);
};

export default BookingForm;
