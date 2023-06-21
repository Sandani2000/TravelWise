import express from "express";
import Vehicle from "../models/Vehicle.js";
import { createError } from "../utils/error.js";
import {
  countByLocation,
  countByType,
  createVehicle,
  deleteVehicle,
  getVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createVehicle);

//UPDATE
router.put("/:id", updateVehicle);

//DELETE
router.delete("/:id", deleteVehicle);

//GET
router.get("/find/:id", getVehicle);

//GET ALL
router.get("/", getVehicles);

router.get("/countByLocation", countByLocation);
router.get("/countByType", countByType);
// router.get("/reservation/:id",);

export default router;
