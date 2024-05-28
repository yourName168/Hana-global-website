/* eslint-disable @next/next/no-img-element */
'use client'
import type { NextPage } from "next";
import { useState } from "react";
import styles from "./security-code-frame.module.css";

const SecurityCodeFrame: NextPage = () => {
  const [yourDetailsTextValue, setYourDetailsTextValue] = useState("");
  const [billingAddressTextValue, setBillingAddressTextValue] = useState("");
  return (
    <form className={styles.securityCodeFrame}>
      <div className={styles.iconsGroup}>
        <div className={styles.cVVInputField}>
          <div className={styles.paypalButton}>
            <b className={styles.orderReview}>Order Review</b>
          </div>
          <div className={styles.emailSubscribeFrame}>
            <div className={styles.payWithCreditCardButton}>
              <b className={styles.tourName}>Tour Name:</b>
              <div className={styles.baliBlissRetreat}>Bali Bliss Retreat</div>
            </div>
            <div className={styles.payWithCreditCardButton}>
              <b className={styles.location}>Location:</b>
              <div className={styles.indonesia}>Indonesia</div>
            </div>
            <div className={styles.contactInformationFrame}>
              <b className={styles.noOfPassengers}>No. of Passengers:</b>
              <div className={styles.vuesaxoutlineIconsGroup}>1</div>
            </div>
            <div className={styles.payWithCreditCardButton}>
              <b className={styles.checkinDate}>Checkin Date:</b>
              <div className={styles.frameCityPostal}>2/2/2023</div>
            </div>
            <div className={styles.rectangleMM}>
              <b className={styles.duration}>Duration:</b>
              <div className={styles.d}>7D</div>
            </div>
          </div>
        </div>
        <div className={styles.cVVInputField1}>
          <div className={styles.frameParent}>
            <div className={styles.paypalButton}>
              <h2 className={styles.billingSummary}>Billing Summary</h2>
            </div>
            <div className={styles.emailSubscribeFrame}>
              <div className={styles.payWithCreditCardButton}>
                <b className={styles.packageCost}>Package Cost:</b>
                <div className={styles.cityFrame}>$4500</div>
              </div>
              <div className={styles.payWithCreditCardButton}>
                <b className={styles.insurance}>Insurance</b>
                <div className={styles.frameGroup}>$50</div>
              </div>
              <div className={styles.payWithCreditCardButton}>
                <b className={styles.tax}>Tax</b>
                <div className={styles.frameText}>10%</div>
              </div>
              <div className={styles.cardNumberFrame}>
                <b className={styles.totalCost}>Total Cost:</b>
                <div className={styles.securityCodeFrame1}>$5000</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <input className={styles.frameChild} type="checkbox" />
            <div className={styles.pleaseCheckToContainer}>
              <span
                className={styles.pleaseCheckTo}
              >{`Please check to acknowledge our `}</span>
              <b className={styles.privacyPolicy}>{`Privacy & Policy`}</b>
            </div>
          </div>
        </div>
        <div className={styles.paypalButtonFrame}>
          <button className={styles.couponInputField}>
            <b className={styles.needHelp}>Need Help?</b>
          </button>
          <div className={styles.footerContact}>
            <b className={styles.doYouHave}>
              Do you have any question about booking tours?
            </b>
            <div className={styles.newsletterSubscribeFrame}>
              <div className={styles.pleaseFeelFree}>
                Please feel free to contact us for any question and support.
              </div>
            </div>
            <button className={styles.newsletterSubscribeFrame1}>
              <div className={styles.contactNow}>Contact Now</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.totalCostDisplay}>
        <img
          className={styles.bookNowButton}
          loading="lazy"
          alt=""
          src="/rectangle-4167@2x.png"
        />
        <div className={styles.footerInfo}>
          <div className={styles.yourDetailsWrapper}>
            <input
              className={styles.yourDetails}
              placeholder="Your Details"
              type="text"
              value={yourDetailsTextValue}
              onChange={(event) => setYourDetailsTextValue(event.target.value)}
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.firstNameParent}>
              <div className={styles.firstName}>First Name*</div>
              <div className={styles.paymentGroupWrapper}>
                <div className={styles.paymentGroup} />
              </div>
              <div className={styles.email}>Email*</div>
              <div className={styles.paymentGroupWrapper}>
                <div className={styles.paymentGroup} />
              </div>
              <div className={styles.phone}>Phone*</div>
              <div className={styles.groupFrameChild} />
            </div>
            <div className={styles.postalCodeFrame}>
              <div className={styles.cityPostalCodeGroup}>
                <div className={styles.lastName}>Last Name*</div>
                <div className={styles.groupFrameChild} />
              </div>
              <div className={styles.cityPostalCodeGroup}>
                <div className={styles.confirmEmail}>Confirm Email*</div>
                <div className={styles.groupFrameChild} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardNumberFrameParent}>
          <div className={styles.yourDetailsWrapper}>
            <input
              className={styles.billingAddress}
              placeholder="Billing Address"
              type="text"
              value={billingAddressTextValue}
              onChange={(event) =>
                setBillingAddressTextValue(event.target.value)
              }
            />
          </div>
          <div className={styles.securityCodeFrame2}>
            <div className={styles.iconsGroup2}>
              <div className={styles.mMFrame}>
                <div className={styles.email}>State*</div>
                <img
                  className={styles.mMFrameChild}
                  loading="lazy"
                  alt=""
                  src="/group-1498.svg"
                />
                <div className={styles.street}>Street*</div>
                <div className={styles.groupFrameChild} />
                <div className={styles.additionalInformation}>
                  Additional Information
                </div>
              </div>
              <div className={styles.postalCodeFrame}>
                <div className={styles.cityPostalCodeGroup}>
                  <div className={styles.city}>City*</div>
                  <img
                    className={styles.mMFrameChild}
                    alt=""
                    src="/group-1498-1.svg"
                  />
                </div>
                <div className={styles.cityPostalCodeGroup}>
                  <div className={styles.postalCode}>Postal Code*</div>
                  <div className={styles.groupFrameChild} />
                </div>
              </div>
            </div>
            <div className={styles.securityCodeFrameChild} />
          </div>
          <div className={styles.paypalButtonFrame1}>
            <input className={styles.frameChild} type="checkbox" />
            <div className={styles.createAnAccount}>
              Create an account for later use
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SecurityCodeFrame;
