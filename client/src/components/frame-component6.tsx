/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component6.module.css";

const FrameComponent6: NextPage = () => {
  return (
    <div className={styles.mMFrameInner}>
      <form className={styles.frameParent}>
        <div className={styles.paymentInfoFrameParent}>
          <div className={styles.paymentInfoFrame}>
            <h2 className={styles.paymentInformation}>Payment Information</h2>
          </div>
          <div className={styles.expirationDateFrame}>
            <div className={styles.securityCodeGroup}>
              <img
                className={styles.securityCodeGroupChild}
                loading="lazy"
                alt=""
                src="/group-1499.svg"
              />
              <b className={styles.payWithCredit}>Pay With Credit Card</b>
            </div>
            <div className={styles.iconsIcons}>
              <div className={styles.cardNumberInput}>
                <div className={styles.cardNumber}>Card Number*</div>
                <div className={styles.payWithPaypalTextParent}>
                  <div className={styles.payWithPaypalText} />
                  <div className={styles.iconsGroup}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="/icons.svg"
                    />
                    <img className={styles.icons1} alt="" src="/icons-1.svg" />
                    <img className={styles.icons2} alt="" src="/icons-2.svg" />
                    <img className={styles.icons3} alt="" src="/icons-3.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.cardNumberInput1}>
                <div className={styles.expirationDateParent}>
                  <div className={styles.expirationDate}>Expiration Date*</div>
                  <div className={styles.securityCode}>Security Code*</div>
                </div>
                <div className={styles.frameGroup}>
                  <input
                    className={styles.frameChild}
                    placeholder="MM"
                    type="text"
                  />
                  <input
                    className={styles.frameItem}
                    placeholder="Year"
                    type="text"
                  />
                  <input
                    className={styles.frameInner}
                    placeholder="CVV"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBackgroundParent}>
            <div className={styles.footerBackground}>
              <div className={styles.footerBackgroundChild} />
            </div>
            <div className={styles.payWithPaypalParent}>
              <b className={styles.payWithPaypal}>Pay With Paypal</b>
              <div className={styles.youWillBe}>
                You will be redirected to the PayPal website.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.checkboxGroup}>
          <div className={styles.footerContact}>
            <input
              className={styles.haveACoupon}
              placeholder="Have a Coupon?"
              type="text"
            />
          </div>
          <div className={styles.emailField}>
            <input
              className={styles.input}
              placeholder="Enter your coupon code"
              type="text"
            />
            <button className={styles.button}>
              <img className={styles.vuesaxoutlineinfoCircleIcon} alt="" />
              <div className={styles.applyCoupon}>Apply Coupon</div>
              <img className={styles.vuesaxoutlinearrowRightIcon} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.totalCostArea}>
          <div className={styles.footerPolicy}>
            <b className={styles.cancellationPolicy}>Cancellation Policy</b>
          </div>
          <div className={styles.contactInfoFrame}>
            <input className={styles.emailFrame} type="checkbox" />
            <div className={styles.iAcceptTermsContainer}>
              <span className={styles.iAccept}>{`I accept `}</span>
              <b className={styles.termsAndConditions}>terms and conditions</b>
              <span className={styles.and}>{` and `}</span>
              <b className={styles.generalPolicy}>general policy</b>
              <span className={styles.span}>.</span>
            </div>
          </div>
        </div>
        <div className={styles.officeLocationFrame}>
          <div className={styles.totalCostContainer}>
            <b className={styles.totalCost}>Total Cost:</b>
            <div className={styles.emptySpace}>$5000</div>
          </div>
          <button className={styles.bookNowFrame}>
            <div className={styles.bookNow}>Book Now</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent6;
