/* eslint-disable prettier/prettier */
import express from 'express'

export const travelRouter = express.Router()

import {
    BookServiceController,
    cancelBookServiceController,
    getAllBlogController,
    getCarRentalController,
    getDomesticBlogController,
    getFlightTicketController,
    getForeignBlogController,
    getHotelRoomController,
    getTourController,
    getVisaBlogController
} from '~/controllers/Travel.Controller'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { wrap } from '~/utils/handler'
import { validate } from '~/utils/validation'

/**
 * Description. get all blog
 * path: /getAllBlog
 * mothod: GET
 * Body:{}
 */
travelRouter.get('/get-all-blog', wrap(getAllBlogController))

/**
 * Description. get Domestic blog
 * path: /getDomesticBlog
 * mothod: GET
 * Body:{}
 */
travelRouter.get('/get-domestic-blog', wrap(getDomesticBlogController))

/**
 * Description. get Foreign blog
 * path: /getForeignBlog
 * mothod: GET
 * Body:{}
 */
travelRouter.get('/get-foreign-blog', wrap(getForeignBlogController))

/**
 * Description. get Visa blog
 * path: /getVisaBlog
 * mothod: GET
 * Body:{}
 */
travelRouter.get('/get-visa-blog', wrap(getVisaBlogController))
/**
 * Description: Get flight tickets
 * Path: /get-flight-tickets
 * Method: GET
 * Body: {}
 */
travelRouter.get('/get-flight-tickets', wrap(getFlightTicketController));

/**
 * Description: Get hotel rooms
 * Path: /get-hotel-rooms
 * Method: GET
 * Body: {}
 */
travelRouter.get('/get-hotel-rooms', wrap(getHotelRoomController));

/**
 * Description: Get car rentals
 * Path: /get-car-rentals
 * Method: GET
 * Body: {}
 */
travelRouter.get('/get-car-rentals', wrap(getCarRentalController));
/**
 * Description: Get car rentals
 * Path: /get-car-rentals
 * Method: GET
 * Body: {}
 */
travelRouter.get('/get-tours', wrap(getTourController));
/**
 * Description: Get car rentals
 * Path: /get-car-rentals
 * Method: GET
 * Body: {}
 */
travelRouter.post('/book-service',validate(accessTokenValidator), wrap(BookServiceController));
travelRouter.post('/cancel-book-service',validate(accessTokenValidator), wrap(cancelBookServiceController));
