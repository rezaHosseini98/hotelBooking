import express from "express";
import {
  checkAvailabilityAPI,
  createBooking,
  getHotelBooking,
  getUserBookings,
} from "../controllers/bookingController.js";
import { protect } from "../middelware/authMiddleware.js";

const bookingRouter = express.Router();

bookingRouter.post("/check-availability", checkAvailabilityAPI);

bookingRouter.post("/book", protect, createBooking);
bookingRouter.get("/user", protect, getUserBookings);
bookingRouter.get("/hotel", protect, getHotelBooking);

export default bookingRouter;
