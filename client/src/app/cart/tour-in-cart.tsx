import type { NextPage } from 'next';
import styles from './tour-in-cart.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

interface TourProps {
    id: string;
}

interface TourData {
    destination: string;
    pricePerPerson: number;
    startDate: string;
    remainingSeats: number;
    period: number;
    title: string;
    blogId: string;
    imgSrc: string;
}

const Tour: NextPage<TourProps> = ({ id }) => {
    const accessToken = localStorage.getItem("access-token")

    const serverURL = process.env.SERVER_URL as string;
    const [tour, setTour] = useState<TourData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${serverURL}/travel/get-tours/?id=${id}`)
            .then((res) => {
                setTour(res.data);
            })
            .catch((err) => {
                console.error("Error fetching tour data:", err);
                setError("Failed to load tour data.");
            });
    }, [id, serverURL]);

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!tour) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const { destination, pricePerPerson, startDate, remainingSeats, period, title, blogId, imgSrc } = tour;

    return (
        <div className={styles.frameParent}>
            <div className={styles.rectangleWrapper} style={{ backgroundImage: `url('/${imgSrc}.jpg')` }}>
                <img className={styles.frameChild} alt={destination} />
            </div>
            <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                    <div className={styles.tourNameParent}>
                        <b className={styles.tourName}>Tour Name:</b>
                        <div className={styles.baliBlissRetreat}>{title}</div>
                    </div>
                    <div className={styles.tourNameParent}>
                        <b className={styles.tourName}>Location:</b>
                        <div className={styles.baliBlissRetreat}>{destination}</div>
                    </div>
                    <div className={styles.tourNameParent}>
                        <b className={styles.tourName}>No. of Passengers:</b>
                        <div className={styles.baliBlissRetreat}>{remainingSeats}</div>
                    </div>
                    <div className={styles.tourNameParent}>
                        <b className={styles.tourName}>Checkin Date:</b>
                        <div className={styles.baliBlissRetreat}>{new Date(startDate).toLocaleDateString()}</div>
                    </div>
                    <div className={styles.durationParent}>
                        <b className={styles.tourName}>Duration:</b>
                        <div className={styles.baliBlissRetreat}>{period}D</div>
                    </div>
                </div>
            </div>
            <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                    <div className={styles.serviceTypeParent}>
                        <b className={styles.tourName}>Service Type:</b>
                        <div className={styles.baliBlissRetreat}>tour booking</div>
                    </div>
                </div>
                <div className={styles.button}>
                    <div className={styles.vuesaxoutlineinfoCircle} />
                    <Button
                        onClick={() => {
                            axios.post(`${serverURL}/travel/cancel-book-service/`,
                                {
                                    serviceId: id,
                                    serviceType:"tour-booking"
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

export default Tour;
