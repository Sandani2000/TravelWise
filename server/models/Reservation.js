import mongoose from "mongoose";
const ReservationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    reservationNumbers: [
      { number: Number, unavailableDates: { type: [Date] } },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);
