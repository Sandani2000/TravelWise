import Vehicle from "../models/Vehicle.js";

//CREATE
export const createVehicle = async (req, res, next) => {
  const newVehicle = new Vehicle(req.body);

  try {
    const savedVehicle = await newVehicle.save();
    res.status(200).json(savedVehicle);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateVehicle = async (req, res, next) => {
  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVehicle);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteVehicle = async (req, res, next) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicle has been deleted.");
  } catch (err) {
    next(err);
  }
};

//GET
export const getVehicle = async (req, res, next) => {
  try {
    const displayVehicle = await Vehicle.findById(req.params.id);
    res.status(200).json(displayVehicle);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getVehicles = async (req, res, next) => {
  const { min, max, ...others } = req.query;

  try {
    const Vehicles = await Vehicle.find({
      ...others,
      price: { $gte: min || 0, $lte: max || 999 },
    });

    res.status(200).json(Vehicles);
  } catch (err) {
    next(err);
  }
};

export const countByLocation = async (req, res, next) => {
  const location = req.query.location.split(",");
  try {
    const list = await Promise.all(
      location.map((location) => {
        return Vehicle.countDocuments({ location: location });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const carCount = await Vehicle.countDocuments({ type: "car" });
    const vanCount = await Vehicle.countDocuments({ type: "van" });

    res.status(200).json([
      { type: "car", count: carCount },
      { type: "van", count: vanCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getVehicleReservations = async (req, res, next) => {};
