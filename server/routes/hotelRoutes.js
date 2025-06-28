import express from "express";
import { protect } from "../middelware/authMiddleware.js";
import { registerHotel } from "../controllers/hotelCotroller.js";

const hotelRouter = express.Router();

hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;
