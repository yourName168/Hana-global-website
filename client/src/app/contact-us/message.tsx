/* eslint-disable @next/next/no-img-element */
import { Button, Input } from "@mui/material";
import styles from "./contacts.module.css";
interface ContactProps {
  img: string;
}
const Message: React.FC<ContactProps> = ({ img }) => {
  return (
    <div className={styles["group-parent"]}>
      <img className={styles["section-2-child"]} alt="" src={img} />
      <div className={styles["frame-group"]}>
        <div className={styles["frame-container"]}>
          <div className={styles["h-tn-parent"]}>
            <b className={styles["tours"]}>Họ tên*</b>
            <div className={styles["rectangle-div"]}>
              <Input className={styles["input"]} />
            </div>
          </div>
          <div className={styles["h-tn-parent"]}>
            <b className={styles["tours"]}>Email*</b>

            <div className={styles["rectangle-div"]}>
              <Input className={styles["input"]} />
            </div>
          </div>
          <div className={styles["h-tn-parent"]}>
            <b className={styles["tours"]}>Lời nhắn của bạn*</b>
            <div className={styles["frame-child2"]}>
              <Input className={styles["input1"]} />
            </div>
          </div>
        </div>
        <Button
          sx={{
            position: "relative",
            fontSize: "16px",
            color: "black",
            textTransform: "capitalize",
          }}
        >
          <div className={styles["gi-wrapper"]}>Gửi </div>
        </Button>
      </div>
    </div>
  );
};
export default Message;
