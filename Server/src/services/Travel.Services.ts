import { BlogSchema } from '~/models/schemas/Blog.Schema'
import { databaseService } from './database.services'
import { ObjectId } from 'mongodb'
import { Booking } from '~/models/schemas/TravelService.schema'
class travelService {
  async getAllBlog() {
    const Domestic = await databaseService.DomesticCollection.find().toArray()
    const Foreign = await databaseService.ForeignCollection.find().toArray()
    return Domestic.concat(Foreign)
  }
  async getDomesticBlog() {
    const result = await databaseService.DomesticCollection.find().toArray()
    return result
  }
  async getForeignBlog() {
    const result = await databaseService.ForeignCollection.find().toArray()
    return result
  }
  async getVisaBlog() {
    const result = await databaseService.VisaCollection.find().toArray()
    return result
  }
  async getTour(_id?: string) {
    if (_id) {
      const result = await databaseService.tourCollection.findOne({ _id: new ObjectId(_id) })
      return result
    }
    const result = await databaseService.tourCollection.find().toArray()
    return result
  }
  async getHotelRoom(_id?: string) {
    if (_id) {
      const result = await databaseService.hotelRoomCollection.findOne({ _id: new ObjectId(_id) })
      return result
    }
    const result = await databaseService.hotelRoomCollection.find().toArray()
    return result
  }
  async getFlightTicket(_id?: string) {
    if (_id) {
      const result = await databaseService.flightCollection.findOne({ _id: new ObjectId(_id) })
      return result
    }
    const result = await databaseService.flightCollection.find().toArray()
    return result
  }
  async getCarRental(_id?: string) {
    if (_id) {
      const result = await databaseService.carRentalColection.findOne({ _id: new ObjectId(_id) })
      return result
    }
    const result = await databaseService.carRentalColection.find().toArray()
    return result
  }
  async bookService(data: any) {
    const { user_id, serviceId, totalPrice, serviceType } = data
    let tourId, flightId, hotelRoomId, carRentalId = ""
    if (serviceType === "tour-booking") {
      tourId = serviceId
    } else if (serviceType === "flight-ticket") {
      flightId = serviceId
    } else if (serviceType === "car-rental") {
      carRentalId = serviceId
    } else if (serviceType === "hotel-room") {
      hotelRoomId = serviceId
    }
    const result = await databaseService.BookingCollection.insertOne(new Booking({
      userId: user_id,
      tourId,
      flightId,
      hotelRoomId,
      carRentalId,
    }))
    return result
  }
  async cancelBookService(data: any) {
    const { serviceId, serviceType } = data;
    let deleteQuery = {};
    if (serviceType === "tour-booking") {
      deleteQuery = { tourId: serviceId };
    } else if (serviceType === "flight-ticket") {
      deleteQuery = { flightId: serviceId };
    } else if (serviceType === "car-rental") {
      deleteQuery = { carRentalId: serviceId };
    } else if (serviceType === "hotel-room") {
      deleteQuery = { hotelRoomId: serviceId };
    }

    const result = await databaseService.BookingCollection.deleteOne(deleteQuery);
    return result
  }
}

export const TravelService = new travelService()
