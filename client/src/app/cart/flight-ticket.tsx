import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './flight-ticket.module.css';
import { Button } from '@mui/material';

interface FlightTicketProps {
    id: string;
}

interface FlightData {
    airline: string;
    flightNumber: string;
    departureDate: string;
    arrivalDate: string;
    departureAirport: string;
    arrivalAirport: string;
    price: number;
    availableSeats: number;
    imgSrc: string;
}

const FlightTicket: NextPage<FlightTicketProps> = ({ id }) => {
    const accessToken = localStorage.getItem("access-token")

    const serverURL = process.env.SERVER_URL as string;
    const [flightData, setFlightData] = useState<FlightData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${serverURL}/travel/get-flight-tickets/?id=${id}`)
            .then((response) => {
                setFlightData(response.data);
            })
            .catch((err) => {
                console.error("Error fetching flight data:", err);
                setError("Failed to load flight data.");
            });
    }, [id, serverURL]);

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!flightData) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const { airline, flightNumber, departureDate, arrivalDate, departureAirport, arrivalAirport, price, availableSeats, imgSrc } = flightData;

    return (
        <div className={styles.cards}>
            <div className={styles.frameParent}>
                <div
                    className={styles.rectangleWrapper}
                    style={{ backgroundImage: `url('/${imgSrc}')` }}
                >
                    <div className={styles.frameChild} />
                </div>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                        <div className={styles.airlineParent}>
                            <b className={styles.airline}>Airline:</b>
                            <div className={styles.vietnamAirline}>{airline}</div>
                        </div>
                        <div className={styles.airlineParent}>
                            <b className={styles.airline}>Flight Number:</b>
                            <div className={styles.vietnamAirline}>{flightNumber}</div>
                        </div>
                        <div className={styles.fromParent}>
                            <b className={styles.airline}>From:</b>
                            <div className={styles.parent}>
                                <div className={styles.div}>{new Date(departureDate).toLocaleString()}</div>
                                <div className={styles.div}>{departureAirport}</div>
                            </div>
                        </div>
                        <div className={styles.toParent}>
                            <b className={styles.to}>To:</b>
                            <div className={styles.parent}>
                                <div className={styles.div}>{new Date(arrivalDate).toLocaleString()}</div>
                                <div className={styles.div}>{arrivalAirport}</div>
                            </div>
                        </div>
                        <div className={styles.airlineParent}>
                            <b className={styles.airline}>Price:</b>
                            <div className={styles.vietnamAirline}>{price.toLocaleString()} VND</div>
                        </div>
                        <div className={styles.airlineParent}>
                            <b className={styles.airline}>Available Seats:</b>
                            <div className={styles.vietnamAirline}>{availableSeats}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.frameContainer}>
                    <div className={styles.frameDiv}>
                        <div className={styles.serviceTypeParent}>
                            <b className={styles.airline}>Service Type:</b>
                            <div className={styles.vietnamAirline}>Flight Ticket</div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <div className={styles.vuesaxoutlineinfoCircle} />
                        <Button
                            onClick={() => {
                                axios.post(`${serverURL}/travel/cancel-book-service/`,
                                    {
                                        serviceId: id,
                                        serviceType:"flight-ticket"
                                    },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${accessToken}`
                                        }
                                    }
                                ).then(() => {
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
        </div>
    );
};

export default FlightTicket;
