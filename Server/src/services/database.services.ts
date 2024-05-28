import { Collection, Db, MongoClient } from 'mongodb'

import dotenv from 'dotenv'
import { Booking, CarRental, Flight, HotelRoom, Tour } from '~/models/schemas/TravelService.schema'
import User from '~/models/schemas/Users.Schema'
import { BlogSchema } from '~/models/schemas/Blog.Schema'
dotenv.config()
const databaseUserName = process.env.USERS_DATABASE_USER
const databasePassword = process.env.USERS_DATABASE_PASSWORD
const userDBName = process.env.USER_DATABASE_NAME
const blogDBName = process.env.BLOG_DATABASE_NAME
const serviceDBName = process.env.SERVICE_DATABASE_NAME
const userCollectionName = process.env.DB_ACCOUNT_COLLECTION as string
const listNovelName = process.env.DB_LIST_NOVEL_COLLECTION_NAME as string
const catagoryCollectionName = process.env.DB_CATEGORY_COLLECTION_NAME as string
const uri = `mongodb+srv://${databaseUserName}:${databasePassword}@hanaglobal.uu9pkvk.mongodb.net/?retryWrites=true&w=majority&appName=HanaGlobal
`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
class DatabaseService {
  private client: MongoClient
  private blogDB: Db
  private usersDB: Db
  private serviceDB: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.blogDB = this.client.db(`${blogDBName}`)
    this.usersDB = this.client.db(`${userDBName}`)
    this.serviceDB = this.client.db(`${serviceDBName}`)
  }
  run = async () => {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect()
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch {
      console.log('Cannot connect to database')
    }
  }
  get users(): Collection<User> {
    return this.usersDB.collection('user_account')
  }
  get DomesticCollection(): Collection<BlogSchema> {
    return this.blogDB.collection('Domestic')
  }
  get ForeignCollection(): Collection<BlogSchema> {
    return this.blogDB.collection('Foreign')
  }
  get VisaCollection(): Collection<BlogSchema> {
    return this.blogDB.collection('Visa')
  }
  get tourCollection(): Collection<Tour> {
    return this.serviceDB.collection('Tours')
  }
  get carRentalColection(): Collection<CarRental> {
    return this.serviceDB.collection("Car-Rental")
  }
  get flightCollection(): Collection<Flight> {
    return this.serviceDB.collection('Flights')
  }
  get hotelRoomCollection(): Collection<HotelRoom> {
    return this.serviceDB.collection('Hotel-Room')
  }
  get BookingCollection(): Collection<Booking> {
    return this.serviceDB.collection('Booking')
  }
}
export const databaseService = new DatabaseService()
