import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  Restaurant_Name: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Opening_Hours: {
    type: String,
    required: true,
  },
  breakfastMenu: {
    type: String,
    required: true,
  },
  breakfastPrice: {
    type: String,
    required: true,
  },
  lunchMenu: {
    type: String,
    required: true,
  },
  lunchPrice: {
    type: String,
    required: true,
  },
  dinnerMenu: {
    type: String,
    required: true,
  },
  dinnerPrice: {
    type: String,
    required: true,
  },
  numTables: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Restaurant", postSchema);
