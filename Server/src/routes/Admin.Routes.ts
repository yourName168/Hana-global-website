/* eslint-disable prettier/prettier */
import express from 'express';

export const adminRouter = express.Router();

import {
    addDomesticBlogController,
    addForeignBlogController,
    addVisaBlogController,
    updateBlog,
    addTourController,
    addFlightController,
    addHotelRoomController,
    addCarRentalController,
    deleteDomesticBlogController,
    deleteForeignBlogController,
    deleteVisaBlogController,
    deleteTourController,
    deleteFlightController,
    deleteHotelRoomController,
    deleteCarRentalController
} from '~/controllers/Admin.Controllers';
import { wrap } from '~/utils/handler';

/**
 * Description: add Domestic blog
 * path: /add-domestic-blog
 * method: POST
 * Body: { title: string, content: string }
 */
adminRouter.post('/add-domestic-blog', wrap(addDomesticBlogController));

/**
 * Description: add Foreign blog
 * path: /add-foreign-blog
 * method: POST
 * Body: { title: string, content: string }
 */
adminRouter.post('/add-foreign-blog', wrap(addForeignBlogController));

/**
 * Description: add Visa blog
 * path: /add-visa-blog
 * method: POST
 * Body: { title: string, content: string }
 */
adminRouter.post('/add-visa-blog', wrap(addVisaBlogController));

/**
 * Description: update blog
 * path: /update-blog
 * method: POST
 * Body: { id: string, title?: string, content?: string }
 */
adminRouter.post('/update-blog', wrap(updateBlog));

/**
 * Description: add Tour
 * path: /add-tour
 * method: POST
 * Body: { destination: string, department: string, pricePerPerson: number, startDate: Date, remainingSeats: number, period: number, title: string, blogId: ObjectId, imgSrc: string }
 */
adminRouter.post('/add-tour', wrap(addTourController));

/**
 * Description: add Flight
 * path: /add-flight
 * method: POST
 * Body: { airline: string, flightNumber: string, departureDate: Date, arrivalDate: Date, departureAirport: string, arrivalAirport: string, price: number, availableSeats: number, imgSrc: string }
 */
adminRouter.post('/add-flight', wrap(addFlightController));

/**
 * Description: add Hotel Room
 * path: /add-hotel-room
 * method: POST
 * Body: { hotelName: string, roomType: string, pricePerNight: number, availableRooms: number, checkInDate: Date, checkOutDate: Date, imgSrc: string }
 */
adminRouter.post('/add-hotel-room', wrap(addHotelRoomController));

/**
 * Description: add Car Rental
 * path: /add-car-rental
 * method: POST
 * Body: { companyName: string, carModel: string, rentalPricePerDay: number, availableCars: number, rentalStartDate: Date, rentalEndDate: Date, imgSrc: string }
 */
adminRouter.post('/add-car-rental', wrap(addCarRentalController));
/**
 * Description: delete Domestic blog
 * path: /delete-domestic-blog/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-domestic-blog/:id', wrap(deleteDomesticBlogController));

/**
 * Description: delete Foreign blog
 * path: /delete-foreign-blog/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-foreign-blog/:id', wrap(deleteForeignBlogController));

/**
 * Description: delete Visa blog
 * path: /delete-visa-blog/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-visa-blog/:id', wrap(deleteVisaBlogController));

/**
 * Description: delete Tour
 * path: /delete-tour/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-tour/:id', wrap(deleteTourController));

/**
 * Description: delete Flight
 * path: /delete-flight/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-flight/:id', wrap(deleteFlightController));

/**
 * Description: delete Hotel Room
 * path: /delete-hotel-room/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-hotel-room/:id', wrap(deleteHotelRoomController));

/**
 * Description: delete Car Rental
 * path: /delete-car-rental/:id
 * method: DELETE
 * Params: { id: string }
 */
adminRouter.delete('/delete-car-rental/:id', wrap(deleteCarRentalController));