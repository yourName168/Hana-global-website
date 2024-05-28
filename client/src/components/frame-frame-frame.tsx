/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-frame-frame.module.css";

type FrameFrameFrameType = {
  vuesaxoutlinesms?: string;
  email?: string;
  getInTouchWithUsForAnyInq?: string;
  infoLuxeEscapescom?: string;
};

const FrameFrameFrame: NextPage<FrameFrameFrameType> = ({
  vuesaxoutlinesms,
  email,
  getInTouchWithUsForAnyInq,
  infoLuxeEscapescom,
}) => {
  return (
    <div className={styles.frameFrameFrame}>
      <img
        className={styles.vuesaxoutlinesmsIcon}
        alt=""
        src={vuesaxoutlinesms}
      />
      <b className={styles.email}>{email}</b>
      <div className={styles.getInTouch}>{getInTouchWithUsForAnyInq}</div>
      <div className={styles.infoluxeEscapescom}>{infoLuxeEscapescom}</div>
    </div>
  );
};

export default FrameFrameFrame;
