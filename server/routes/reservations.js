import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservations,
  updateReservation,
} from "../controllers/reservation.js";

const router = express.Router();
//CREATE
router.post("/:vehicleid", verifyAdmin, createReservation);

//UPDATE
// router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateReservation);
//DELETE
router.delete("/:id/:vehicleid", verifyAdmin, deleteReservation);
//GET

router.get("/:id", getReservation);
//GET ALL

router.get("/", getReservations);

export default router;
