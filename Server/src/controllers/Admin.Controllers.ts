import { NextFunction, Request, Response } from 'express'
import { BlogSchema } from '~/models/schemas/Blog.Schema'
import { CarRentalType, FlightType, HotelRoomType, TourType } from '~/models/schemas/TravelService.schema'
import { AdminService } from '~/services/Admin.services'
import { ObjectId } from 'mongodb'
export const addDomesticBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as BlogSchema
    const result = await AdminService.addDomesticBlog(data)
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const addForeignBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as BlogSchema
    const result = await AdminService.addForeignBlog(data)
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const addVisaBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as BlogSchema
    const result = await AdminService.addVisaBlog(data)
    res.json(result)
  } catch (error) {
    next(error)
  }
}
export const updateBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.updateBlog()
    console.log("abc ")
    res.json(result)
  } catch (error) {
    next(error)
  }
}

// Controller for adding a Tour
export const addTourController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.addTour();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Controller for adding a Flight
export const addFlightController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.addFlight();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Controller for adding a Hotel Room
export const addHotelRoomController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.addHotelRoom();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Controller for adding a Car Rental
export const addCarRentalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.addCarRental();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
export const deleteDomesticBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteDomesticBlog(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteForeignBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteForeignBlog(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteVisaBlogController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteVisaBlog(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteTourController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteTour(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteFlightController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteFlight(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteHotelRoomController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteHotelRoom(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteCarRentalController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await AdminService.deleteCarRental(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};