import { NextFunction, Request, Response, json } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { BlogSchema } from '~/models/schemas/Blog.Schema'
import { TravelService } from '~/services/Travel.Services'

export const getAllBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TravelService.getAllBlog()
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const getDomesticBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TravelService.getDomesticBlog()
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const getForeignBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TravelService.getForeignBlog()
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const getVisaBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TravelService.getVisaBlog()
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const getFlightTicketController = async (req: Request, res: Response) => {
  const id = req.query.id
  const result = await TravelService.getFlightTicket(id as string)
  res.json(result)
};

export const getHotelRoomController = async (req: Request, res: Response) => {
  const id = req.query.id
  const result = await TravelService.getHotelRoom(id as string)
  res.json(result)
};

export const getCarRentalController = async (req: Request, res: Response) => {
  const id = req.query.id
  const result = await TravelService.getCarRental(id as string)
  console.log(result)
  res.json(result)
};
export const getTourController = async (req: Request, res: Response) => {
  const id = req.query.id
  const result = await TravelService.getTour(id as string)
  res.json(result)
};

export const BookServiceController = async (req: Request, res: Response) => {
  const {  serviceId, totalPrice, serviceType } = req.body
  const { user_id } = req.decoded_authorizarion as JwtPayload
  console.log(user_id)
  const result = await TravelService.bookService({ user_id, serviceId, totalPrice, serviceType })
  res.json(result)
};
export const cancelBookServiceController = async (req: Request, res: Response) => {
  const {  serviceId,serviceType } = req.body
  const result = await TravelService.cancelBookService(serviceId)
  res.json(result)
};
