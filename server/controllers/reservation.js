import Vehicle from "../models/Vehicle.js";
import Reservation from "../models/Reservation.js";
import { createError } from "../utils/error.js";

export const createReservation = async (req, res, next) => {
  const vehicleId = req.params.vehicleid;
  const newReservation = new Reservation(req.body);

  try {
    const savedReservation = await newReservation.save();
    try {
      await Vehicle.findByIdAndUpdate(vehicleId, {
        $push: { reservations: savedReservation._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteReservation = async (req, res, next) => {
  const vehicleId = req.params.vehicleid;
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    try {
      await Vehicle.findByIdAndUpdate(vehicleId, {
        $pull: { reservations: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Reservation has been deleted.");
  } catch (err) {
    next(err);
  }
};

//GET
export const getReservation = async (req, res, next) => {
  try {
    const displayReservation = await Reservation.findById(req.params.id);
    res.status(200).json(displayReservation);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getReservations = async (req, res, next) => {
  try {
    const displayReservations = await Reservation.find();
    res.status(200).json(displayReservations);
  } catch (err) {
    next(err);
  }
};
