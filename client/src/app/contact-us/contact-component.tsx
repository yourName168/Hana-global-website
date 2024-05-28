/* eslint-disable @next/next/no-img-element */
import FollowUs from "../../const/follow-us";
import styles from "./contacts.module.css";
interface ContactProps {
  content: string; // Prop for the content
  title: string; // Prop for the title
  email: string; // Prop for the email
  phone: string; // Prop for the phone number
  address: string; // Prop for the address
}
const ContactComponent: React.FC<ContactProps> = ({
  content,
  title,
  email,
  phone,
  address,
}) => {
  return (
    <div className={styles["section-2"]}>
      <div className={styles["frame-parent"]}>
        <div className={styles["lin-h-vi-chng-ti-bit-parent"]}>
          <b className={styles["lin-h-vi"]}>
            {title}
          </b>
          <div className={styles["bn-c-th"]}>
            {content}
          </div>
        </div>
        <div className={styles["vuesaxoutlinelocation-parent"]}>
          <img
            className={styles["avatar-icon"]}
            alt=""
            src="/vuesaxoutlinelocation.svg"
          />
          <div className={styles["tours"]}>{address}</div>
        </div>
        <div className={styles["vuesaxoutlinelocation-parent"]}>
          <img
            className={styles["avatar-icon"]}
            alt=""
            src="/vuesaxoutlinecall.svg"
          />
          <div className={styles["tours"]}>{phone}</div>
        </div>
        <div className={styles["vuesaxoutlinelocation-parent"]}>
          <img
            className={styles["avatar-icon"]}
            alt=""
            src="/vuesaxoutlinesms.svg"
          />
          <div className={styles["tours"]}>{email}</div>
        </div>
        <FollowUs />
      </div>
      <img
        className={styles["section-2-child"]}
        alt=""
        src="/rectangle-4149@2x.png"
      />
    </div>
  );
};
export default ContactComponent;
