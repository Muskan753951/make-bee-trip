import { Router } from "express";
const router = Router();
import { searchFlights, searchBuses, searchTrains, getHotels } from "../controllers/bookingController.js";

router.get("/flights/search", searchFlights);
router.get("/buses/search", searchBuses);
router.get("/trains/search", searchTrains);
router.get("/hotels", getHotels);

export default router;