import { ObjectId } from "mongodb";

export interface TourType {
    destination: string,
    pricePerPerson: number,
    startDate: Date,
    remainingSeats: number,
    period: number,
    title: string,
    blogId: ObjectId,
    imgSrc: string
}

export class Tour {
    private destination: string;
    private pricePerPerson: number;
    private startDate: Date;
    private remainingSeats: number;
    private period: number;
    private title: string;
    private blogId: ObjectId;
    private imgSrc: string;

    constructor(data: TourType) {
        this.destination = data.destination;
        this.pricePerPerson = data.pricePerPerson;
        this.startDate = data.startDate;
        this.remainingSeats = data.remainingSeats;
        this.period = data.period;
        this.title = data.title;
        this.blogId = data.blogId;
        this.imgSrc = data.imgSrc;
    }
}
export interface FlightType {
    airline: string;
    flightNumber: string;
    departureDate: Date;
    arrivalDate: Date;
    departureAirport: string;
    arrivalAirport: string;
    price: number;
    availableSeats: number;
    imgSrc: string;
}

export class Flight {
    private airline: string;
    private flightNumber: string;
    private departureDate: Date;
    private arrivalDate: Date;
    private departureAirport: string;
    private arrivalAirport: string;
    private price: number;
    private availableSeats: number;
    private imgSrc: string;

    constructor(data: FlightType) {
        this.airline = data.airline;
        this.flightNumber = data.flightNumber;
        this.departureDate = data.departureDate;
        this.arrivalDate = data.arrivalDate;
        this.departureAirport = data.departureAirport;
        this.arrivalAirport = data.arrivalAirport;
        this.price = data.price;
        this.availableSeats = data.availableSeats;
        this.imgSrc = data.imgSrc;
    }
}

export interface HotelRoomType {
    hotelName: string;
    pricePerNight: number;
    availableRooms: number;
    imgSrc: string;
}

export class HotelRoom {
    private hotelName: string;
    private pricePerNight: number;
    private availableRooms: number;
    private imgSrc: string;

    constructor(data: HotelRoomType) {
        this.hotelName = data.hotelName;
        this.pricePerNight = data.pricePerNight;
        this.availableRooms = data.availableRooms;
        this.imgSrc = data.imgSrc;
    }
}

export interface CarRentalType {
    companyName: string;
    carModel: string;
    rentalPricePerDay: number;
    availableCars: number;
    imgSrc: string;
}

export class CarRental {
    private companyName: string;
    private carModel: string;
    private rentalPricePerDay: number;
    private availableCars: number;
    private imgSrc: string;
    constructor(data: CarRentalType) {
        this.companyName = data.companyName;
        this.carModel = data.carModel;
        this.rentalPricePerDay = data.rentalPricePerDay;
        this.availableCars = data.availableCars;
        this.imgSrc = data.imgSrc;
    }
}
export enum BookingStatus {
    pending,
    Resolving,
    done,
    fail
}
interface BookingType {
    userId: string;
    tourId?: string;
    flightId?: string;
    hotelRoomId?: string;
    carRentalId?: string;
    bookingDate?: Date;
    status?: BookingStatus
}
export class Booking {
    userId: string;
    tourId?: string;
    flightId?: string;
    hotelRoomId?: string;
    carRentalId?: string;
    bookingDate: Date;
    status: BookingStatus
    constructor(booking: BookingType) {
        this.userId = booking.userId
        this.tourId = booking?.tourId
        this.flightId = booking?.flightId
        this.hotelRoomId = booking?.hotelRoomId
        this.carRentalId = booking?.carRentalId
        this.bookingDate = new Date()
        this.status = BookingStatus.pending
    }
}