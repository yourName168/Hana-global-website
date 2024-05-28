import type { NextPage } from 'next';
import styles from './tour-booking.module.css';
import FormInput from './form-input';
import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { headers } from 'next/headers';

interface TourBookingProps {
    id: string
    destination: string;
    pricePerPerson: number;
    startDate: string;
    remainingSeats: number;
    period: number;
    title: string;
    blogId: string;
    imgSrc: string;
}

const TourBooking: NextPage<TourBookingProps> = ({ destination, pricePerPerson, startDate, remainingSeats, period, title, id, blogId, imgSrc }) => {
    const serverURL = process.env.SERVER_URL || "";
    const accessToken = localStorage.getItem("access-token")
    const handleSubmit = async () => {
        try {
            const result = await axios.post(
                `${serverURL}/travel/book-service`,
                {
                    serviceId: id,
                    serviceType: "tour-booking"
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            window.location.href="./cart"
        } catch (error) {
            alert("vui lòng đăng nhập để đặt dịch vụ")
            window.location.href = "./login"
        }
    }
    return (
        <div className={styles.body}>
            <b className={styles.bookingTour}>Đặt chuyến</b>
            <div className={styles.columns}>
                <div className={styles.rightColumn}>
                    <div className={styles.frameParent}>
                        <div className={styles.orderReviewWrapper}>
                            <b className={styles.orderReview}>Thông tin</b>
                        </div>

                        <div className={styles.frameGroup}>
                            <div className={styles.tourNameParent}>
                                <b className={styles.tourName}>Chuyến đi:</b>
                                <div className={styles.baliBlissRetreat}>{title}</div>
                            </div>
                            <div className={styles.tourNameParent}>
                                <b className={styles.tourName}>Địa điểm:</b>
                                <div className={styles.baliBlissRetreat}>{destination}</div>
                            </div>
                            <div className={styles.tourNameParent}>
                                <b className={styles.tourName}>No. of Passengers:</b>
                                <div className={styles.baliBlissRetreat}>{remainingSeats}</div>
                            </div>
                            <div className={styles.tourNameParent}>
                                <b className={styles.tourName}>Bắt đầu:</b>
                                <div className={styles.baliBlissRetreat}>{(startDate)}</div>
                            </div>
                            <div className={styles.durationParent}>
                                <b className={styles.tourName}>Trong vòng:</b>
                                <div className={styles.baliBlissRetreat}>{period} ngày</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.leftColumn}>
                    <img className={styles.leftColumnChild} alt="" src={`${imgSrc}.png`} />
                    <div className={styles.frameParent3}>
                        <div className={styles.bookNowWrapper}>
                            <Button
                                onClick={handleSubmit}>
                                <div className={styles.bookNow}>Book Now</div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBooking;
