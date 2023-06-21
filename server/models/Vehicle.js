import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  reservations: {
    type: [String],
  },
  photos: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Vehicles", VehicleSchema);
