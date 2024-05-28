import { BlogSchema } from '~/models/schemas/Blog.Schema';
import { databaseService } from './database.services';
import { CarRentalType, FlightType, HotelRoomType, Tour, TourType } from '~/models/schemas/TravelService.schema';
import { ObjectId } from 'mongodb';
import { TravelService } from './Travel.Services';
import { random } from 'lodash';
const listHotelRoom = [
  {
    "hotelName": "Mường Thanh Luxury Hà Nội",
    "pricePerNight": 150,
    "availableRooms": 12,
    "imgSrc": "hotel3.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Vinpearl Luxury Đà Nẵng",
    "pricePerNight": 200,
    "availableRooms": 10,
    "imgSrc": "hotel1.png",
    "location": "Đà Nẵng"
  },
  {
    "hotelName": "InterContinental Nha Trang",
    "pricePerNight": 180,
    "availableRooms": 15,
    "imgSrc": "hotel2.png",
    "location": "Nha Trang"
  },
  {
    "hotelName": "Furama Resort Đà Nẵng",
    "pricePerNight": 170,
    "availableRooms": 8,
    "imgSrc": "hotel4.png",
    "location": "Đà Nẵng"
  },
  {
    "hotelName": "Pullman Vũng Tàu",
    "pricePerNight": 160,
    "availableRooms": 20,
    "imgSrc": "hotel5.png",
    "location": "Vũng Tàu"
  },
  {
    "hotelName": "Novotel Suites Hà Nội",
    "pricePerNight": 140,
    "availableRooms": 12,
    "imgSrc": "hotel6.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Sheraton Sài Gòn",
    "pricePerNight": 190,
    "availableRooms": 14,
    "imgSrc": "hotel7.png",
    "location": "Hồ Chí Minh"
  },
  {
    "hotelName": "Hilton Hanoi Opera",
    "pricePerNight": 175,
    "availableRooms": 18,
    "imgSrc": "hotel8.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Melia Hà Nội",
    "pricePerNight": 165,
    "availableRooms": 11,
    "imgSrc": "hotel9.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Hyatt Regency Đà Nẵng",
    "pricePerNight": 210,
    "availableRooms": 9,
    "imgSrc": "hotel10.png",
    "location": "Đà Nẵng"
  },
  {
    "hotelName": "Rex Hotel Sài Gòn",
    "pricePerNight": 155,
    "availableRooms": 13,
    "imgSrc": "hotel11.png",
    "location": "Hồ Chí Minh"
  },
  {
    "hotelName": "La Veranda Resort Phú Quốc",
    "pricePerNight": 185,
    "availableRooms": 16,
    "imgSrc": "hotel12.png",
    "location": "Phú Quốc"
  },
  {
    "hotelName": "Sunrise Nha Trang Beach Hotel & Spa",
    "pricePerNight": 160,
    "availableRooms": 10,
    "imgSrc": "hotel13.png",
    "location": "Nha Trang"
  },
  {
    "hotelName": "Muong Thanh Grand Nha Trang Hotel",
    "pricePerNight": 140,
    "availableRooms": 19,
    "imgSrc": "hotel14.png",
    "location": "Nha Trang"
  },
  {
    "hotelName": "Pan Pacific Hà Nội",
    "pricePerNight": 175,
    "availableRooms": 14,
    "imgSrc": "hotel15.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Sofitel Legend Metropole Hà Nội",
    "pricePerNight": 220,
    "availableRooms": 7,
    "imgSrc": "hotel16.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "The Reverie Sài Gòn",
    "pricePerNight": 250,
    "availableRooms": 8,
    "imgSrc": "hotel17.png",
    "location": "Hồ Chí Minh"
  },
  {
    "hotelName": "Vinpearl Resort Nha Trang",
    "pricePerNight": 195,
    "availableRooms": 12,
    "imgSrc": "hotel18.png",
    "location": "Nha Trang"
  },
  {
    "hotelName": "Grand Mercure Danang",
    "pricePerNight": 150,
    "availableRooms": 17,
    "imgSrc": "hotel19.png",
    "location": "Đà Nẵng"
  },
  {
    "hotelName": "Sherwood Residence Sài Gòn",
    "pricePerNight": 185,
    "availableRooms": 10,
    "imgSrc": "hotel20.png",
    "location": "Hồ Chí Minh"
  },
  {
    "hotelName": "Ana Mandara Villas Đà Lạt",
    "pricePerNight": 165,
    "availableRooms": 14,
    "imgSrc": "hotel21.png",
    "location": "Đà Lạt"
  },
  {
    "hotelName": "Amanoi Resort Ninh Thuận",
    "pricePerNight": 240,
    "availableRooms": 5,
    "imgSrc": "hotel22.png",
    "location": "Ninh Thuận"
  },
  {
    "hotelName": "Lotte Hotel Hà Nội",
    "pricePerNight": 190,
    "availableRooms": 13,
    "imgSrc": "hotel23.png",
    "location": "Hà Nội"
  },
  {
    "hotelName": "Fusion Maia Resort Đà Nẵng",
    "pricePerNight": 200,
    "availableRooms": 9,
    "imgSrc": "hotel24.png",
    "location": "Đà Nẵng"
  },
  {
    "hotelName": "Alma Resort Cam Ranh",
    "pricePerNight": 180,
    "availableRooms": 12,
    "imgSrc": "hotel25.png",
    "location": "Cam Ranh"
  }
]
const listFlightTicket = [
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN1",
    "departureDate": "2024-04-20T10:00:00Z",
    "arrivalDate": "2024-04-20T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "HAN",
    "price": 2000000,
    "availableSeats": 16,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN2",
    "departureDate": "2024-04-21T11:00:00Z",
    "arrivalDate": "2024-04-21T15:00:00Z",
    "departureAirport": "HAN",
    "arrivalAirport": "SGN",
    "price": 1950000,
    "availableSeats": 14,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN3",
    "departureDate": "2024-04-22T09:00:00Z",
    "arrivalDate": "2024-04-22T13:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "DAD",
    "price": 1800000,
    "availableSeats": 18,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN4",
    "departureDate": "2024-04-23T10:30:00Z",
    "arrivalDate": "2024-04-23T14:30:00Z",
    "departureAirport": "DAD",
    "arrivalAirport": "SGN",
    "price": 1850000,
    "availableSeats": 12,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN5",
    "departureDate": "2024-04-24T08:00:00Z",
    "arrivalDate": "2024-04-24T12:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "CXR",
    "price": 1750000,
    "availableSeats": 20,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN6",
    "departureDate": "2024-04-25T12:00:00Z",
    "arrivalDate": "2024-04-25T16:00:00Z",
    "departureAirport": "CXR",
    "arrivalAirport": "SGN",
    "price": 1700000,
    "availableSeats": 16,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN7",
    "departureDate": "2024-04-26T11:00:00Z",
    "arrivalDate": "2024-04-26T15:00:00Z",
    "departureAirport": "HAN",
    "arrivalAirport": "DAD",
    "price": 1900000,
    "availableSeats": 15,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN8",
    "departureDate": "2024-04-27T09:00:00Z",
    "arrivalDate": "2024-04-27T13:00:00Z",
    "departureAirport": "DAD",
    "arrivalAirport": "HAN",
    "price": 1850000,
    "availableSeats": 19,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN9",
    "departureDate": "2024-04-28T13:00:00Z",
    "arrivalDate": "2024-04-28T17:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "HPH",
    "price": 2000000,
    "availableSeats": 14,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN10",
    "departureDate": "2024-04-29T14:00:00Z",
    "arrivalDate": "2024-04-29T18:00:00Z",
    "departureAirport": "HPH",
    "arrivalAirport": "SGN",
    "price": 1950000,
    "availableSeats": 17,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN11",
    "departureDate": "2024-04-30T10:00:00Z",
    "arrivalDate": "2024-04-30T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "VCA",
    "price": 1850000,
    "availableSeats": 20,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN12",
    "departureDate": "2024-05-01T12:00:00Z",
    "arrivalDate": "2024-05-01T16:00:00Z",
    "departureAirport": "VCA",
    "arrivalAirport": "SGN",
    "price": 1800000,
    "availableSeats": 18,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN13",
    "departureDate": "2024-05-02T10:00:00Z",
    "arrivalDate": "2024-05-02T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "UIH",
    "price": 1700000,
    "availableSeats": 19,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN123",
    "departureDate": "2024-04-20T10:00:00Z",
    "arrivalDate": "2024-04-20T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "HAN",
    "price": 2000000,
    "availableSeats": 16,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH456",
    "departureDate": "2024-04-21T11:00:00Z",
    "arrivalDate": "2024-04-21T15:00:00Z",
    "departureAirport": "HAN",
    "arrivalAirport": "SGN",
    "price": 1900000,
    "availableSeats": 14,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ789",
    "departureDate": "2024-04-22T09:00:00Z",
    "arrivalDate": "2024-04-22T13:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "DAD",
    "price": 1800000,
    "availableSeats": 18,
    "imgSrc": "vietjetAir.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN321",
    "departureDate": "2024-04-23T10:30:00Z",
    "arrivalDate": "2024-04-23T14:30:00Z",
    "departureAirport": "DAD",
    "arrivalAirport": "SGN",
    "price": 1850000,
    "availableSeats": 12,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH654",
    "departureDate": "2024-04-24T08:00:00Z",
    "arrivalDate": "2024-04-24T12:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "CXR",
    "price": 1750000,
    "availableSeats": 20,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ987",
    "departureDate": "2024-04-25T12:00:00Z",
    "arrivalDate": "2024-04-25T16:00:00Z",
    "departureAirport": "CXR",
    "arrivalAirport": "SGN",
    "price": 1700000,
    "availableSeats": 16,
    "imgSrc": "vietjetAir.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN213",
    "departureDate": "2024-04-26T11:00:00Z",
    "arrivalDate": "2024-04-26T15:00:00Z",
    "departureAirport": "HAN",
    "arrivalAirport": "DAD",
    "price": 1900000,
    "availableSeats": 15,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH342",
    "departureDate": "2024-04-27T09:00:00Z",
    "arrivalDate": "2024-04-27T13:00:00Z",
    "departureAirport": "DAD",
    "arrivalAirport": "HAN",
    "price": 1850000,
    "availableSeats": 19,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ111",
    "departureDate": "2024-04-28T13:00:00Z",
    "arrivalDate": "2024-04-28T17:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "HPH",
    "price": 2000000,
    "availableSeats": 14,
    "imgSrc": "vietjetAir.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN423",
    "departureDate": "2024-04-29T14:00:00Z",
    "arrivalDate": "2024-04-29T18:00:00Z",
    "departureAirport": "HPH",
    "arrivalAirport": "SGN",
    "price": 1950000,
    "availableSeats": 17,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH554",
    "departureDate": "2024-04-30T10:00:00Z",
    "arrivalDate": "2024-04-30T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "VCA",
    "price": 1850000,
    "availableSeats": 20,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ222",
    "departureDate": "2024-05-01T12:00:00Z",
    "arrivalDate": "2024-05-01T16:00:00Z",
    "departureAirport": "VCA",
    "arrivalAirport": "SGN",
    "price": 1800000,
    "availableSeats": 18,
    "imgSrc": "vietjetAir.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN531",
    "departureDate": "2024-05-02T10:00:00Z",
    "arrivalDate": "2024-05-02T14:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "UIH",
    "price": 1700000,
    "availableSeats": 19,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH767",
    "departureDate": "2024-05-03T11:00:00Z",
    "arrivalDate": "2024-05-03T15:00:00Z",
    "departureAirport": "UIH",
    "arrivalAirport": "SGN",
    "price": 1650000,
    "availableSeats": 17,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ333",
    "departureDate": "2024-05-04T12:00:00Z",
    "arrivalDate": "2024-05-04T16:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "PXU",
    "price": 1600000,
    "availableSeats": 18,
    "imgSrc": "vietjetAir.png"
  },
  {
    "airline": "Vietnam Airlines",
    "flightNumber": "VN642",
    "departureDate": "2024-05-05T13:00:00Z",
    "arrivalDate": "2024-05-05T17:00:00Z",
    "departureAirport": "PXU",
    "arrivalAirport": "SGN",
    "price": 1650000,
    "availableSeats": 16,
    "imgSrc": "vietnamAirline.png"
  },
  {
    "airline": "Bamboo Airways",
    "flightNumber": "QH878",
    "departureDate": "2024-05-06T08:00:00Z",
    "arrivalDate": "2024-05-06T12:00:00Z",
    "departureAirport": "SGN",
    "arrivalAirport": "VII",
    "price": 1800000,
    "availableSeats": 14,
    "imgSrc": "bambooAirways.png"
  },
  {
    "airline": "VietJet Air",
    "flightNumber": "VJ444",
    "departureDate": "2024-05-07T09:00:00Z",
    "arrivalDate": "2024-05-07T13:00:00Z",
    "departureAirport": "VII",
    "arrivalAirport": "SGN",
    "price": 1750000,
    "availableSeats": 15,
    "imgSrc": "vietjetAir.png"
  }]
const carRentalData = [
  {
    "companyName": "Hertz",
    "carModel": "Toyota Camry",
    "rentalPrice": 1500000,
    "availableCars": 10,
    "imgSrc": "car_1.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "Avis",
    "carModel": "Honda Civic",
    "rentalPrice": 1200000,
    "availableCars": 8,
    "imgSrc": "car_2.png",
    "numberOfRentalDays": 5
  },
  {
    "companyName": "Enterprise",
    "carModel": "Ford Focus",
    "rentalPrice": 1000000,
    "availableCars": 12,
    "imgSrc": "car_3.png",
    "numberOfRentalDays": 4
  },
  {
    "companyName": "Budget",
    "carModel": "Hyundai Elantra",
    "rentalPrice": 900000,
    "availableCars": 15,
    "imgSrc": "car_4.png",
    "numberOfRentalDays": 7
  },
  {
    "companyName": "Alamo",
    "carModel": "Chevrolet Cruze",
    "rentalPrice": 1100000,
    "availableCars": 9,
    "imgSrc": "car_5.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "National",
    "carModel": "Nissan Altima",
    "rentalPrice": 1300000,
    "availableCars": 7,
    "imgSrc": "car_6.png",
    "numberOfRentalDays": 5
  },
  {
    "companyName": "Thrifty",
    "carModel": "Kia Optima",
    "rentalPrice": 950000,
    "availableCars": 11,
    "imgSrc": "car_7.png",
    "numberOfRentalDays": 4
  },
  {
    "companyName": "Dollar",
    "carModel": "Mazda 3",
    "rentalPrice": 1000000,
    "availableCars": 13,
    "imgSrc": "car_8.png",
    "numberOfRentalDays": 6
  },
  {
    "companyName": "Sixt",
    "carModel": "Volkswagen Jetta",
    "rentalPrice": 1400000,
    "availableCars": 6,
    "imgSrc": "car_9.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "Europcar",
    "carModel": "Subaru Impreza",
    "rentalPrice": 1250000,
    "availableCars": 8,
    "imgSrc": "car_10.png",
    "numberOfRentalDays": 5
  },
  {
    "companyName": "Payless",
    "carModel": "Tesla Model 3",
    "rentalPrice": 1800000,
    "availableCars": 5,
    "imgSrc": "car_11.png",
    "numberOfRentalDays": 4
  },
  {
    "companyName": "Firefly",
    "carModel": "BMW 3 Series",
    "rentalPrice": 1700000,
    "availableCars": 7,
    "imgSrc": "car_12.png",
    "numberOfRentalDays": 6
  },
  {
    "companyName": "Advantage",
    "carModel": "Mercedes-Benz C-Class",
    "rentalPrice": 1900000,
    "availableCars": 4,
    "imgSrc": "car_13.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "Fox",
    "carModel": "Audi A4",
    "rentalPrice": 1600000,
    "availableCars": 6,
    "imgSrc": "car_14.png",
    "numberOfRentalDays": 5
  },
  {
    "companyName": "Green Motion",
    "carModel": "Lexus ES",
    "rentalPrice": 2000000,
    "availableCars": 3,
    "imgSrc": "car_15.png",
    "numberOfRentalDays": 4
  },
  {
    "companyName": "Silvercar",
    "carModel": "Infiniti Q50",
    "rentalPrice": 2100000,
    "availableCars": 2,
    "imgSrc": "car_16.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "E-Z Rent-A-Car",
    "carModel": "Cadillac ATS",
    "rentalPrice": 2200000,
    "availableCars": 1,
    "imgSrc": "car_17.png",
    "numberOfRentalDays": 5
  },
  {
    "companyName": "Prestige",
    "carModel": "Porsche Panamera",
    "rentalPrice": 2500000,
    "availableCars": 2,
    "imgSrc": "car_18.png",
    "numberOfRentalDays": 4
  },
  {
    "companyName": "Hertz",
    "carModel": "Toyota Corolla",
    "rentalPrice": 1500000,
    "availableCars": 10,
    "imgSrc": "car_19.png",
    "numberOfRentalDays": 3
  },
  {
    "companyName": "Avis",
    "carModel": "Honda Accord",
    "rentalPrice": 1200000,
    "availableCars": 8,
    "imgSrc": "car_20.png",
    "numberOfRentalDays": 5
  }
]

class adminService {
  async addDomesticBlog(data: BlogSchema) {
    const result = await databaseService.DomesticCollection.insertOne(data);
    return result;
  }

  async addForeignBlog(data: BlogSchema) {
    const result = await databaseService.ForeignCollection.insertOne(data);
    return result;
  }

  async addVisaBlog(data: BlogSchema) {
    const result = await databaseService.VisaCollection.insertOne(data);
    return result;
  }

  async updateBlog() {
    const listDomesticBlog = await databaseService.ForeignCollection.find().toArray();
    listDomesticBlog.map(async (domesticBlog) => {
      const { _id, contenFileName } = domesticBlog;
      await databaseService.ForeignCollection.updateOne({ _id }, {
        $set: { contenFileName: `foreign_HTML/${contenFileName}` }
      });
    });
    console.log(listDomesticBlog);
    return listDomesticBlog;
  }

  async addTour() {
    const listBlog = await TravelService.getAllBlog()
    // Hàm sinh số ngẫu nhiên trong một khoảng
    function randomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Hàm sinh số thực ngẫu nhiên trong một khoảng
    function randomFloat(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    // Hàm sinh ngày ngẫu nhiên trong một khoảng
    function randomDate(start: Date, end: Date): Date {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    listBlog.map(async (blog) => {
      const destination: string = blog.title;
      const imgSrc: string = blog.imgsrc;
      const title: string = blog.description;
      const pricePerPerson: number = randomFloat(100, 500); // Giá vé cho một người
      const period: number = randomNumber(1, 7); // Thời gian tour (số ngày)
      const blogId = blog._id;
      const remainingSeats: number = randomNumber(5, 20); // Số lượng ghế còn trống
      const startDate: Date = randomDate(new Date(), new Date('2024-12-31'));
      const newTour = new Tour({
        destination: destination,
        imgSrc: imgSrc,
        title: title,
        pricePerPerson: pricePerPerson,
        period: period,
        blogId: blogId,
        remainingSeats: remainingSeats,
        startDate: startDate
      });
      // Thêm tour vào cơ sở dữ liệu
      await databaseService.tourCollection.insertOne(newTour);
    })

    return 'acb';
  }

  async addFlight() {
    listFlightTicket.map(async (flightTicket) => {
      // const data=JSON.stringify(hotelRoom)
      await databaseService.flightCollection.insertOne(flightTicket)
    })
  }

  async addHotelRoom() {
    listHotelRoom.map(async (hotelRoom) => {
      // const data=JSON.stringify(hotelRoom)
      await databaseService.hotelRoomCollection.insertOne(hotelRoom)
    })
    return 123;
  }

  async addCarRental() {

    carRentalData.map(async (flightTicket) => {
      // const data=JSON.stringify(hotelRoom)
      await databaseService.carRentalColection.insertOne(flightTicket)
    })
  }
  async deleteDomesticBlog(id: ObjectId) {
    const result = await databaseService.DomesticCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteForeignBlog(id: ObjectId) {
    const result = await databaseService.ForeignCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteVisaBlog(id: ObjectId) {
    const result = await databaseService.VisaCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteTour(id: ObjectId) {
    const result = await databaseService.tourCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteFlight(id: ObjectId) {
    const result = await databaseService.flightCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteHotelRoom(id: ObjectId) {
    const result = await databaseService.hotelRoomCollection.deleteOne({ _id: id });
    return result;
  }

  async deleteCarRental(id: ObjectId) {
    const result = await databaseService.carRentalColection.deleteOne({ _id: id });
    return result;
  }
}

export const AdminService = new adminService();
