import "./addVehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddData = async (event) => {
    event.preventDefault();

    const vehicle = {
      name: vehicleName,
      number: vehicleNumber,
      type: vehicleType,
      model: vehicleModel,
      location: location,
      price: price,
      rating: rating,
      desc: description,
    };

    await axios.post("/api/vehicles", vehicle);

    navigate("/changeVehicle");
  };

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(event) => {
              setVehicleName(event.target.value);
            }}
          />

          <label htmlFor="number">Vehicle Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            required
            onChange={(event) => {
              setVehicleNumber(event.target.value);
            }}
          />

          <label htmlFor="type">Vehicle Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            required
            onChange={(event) => {
              setVehicleType(event.target.value);
            }}
          />

          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            required
            onChange={(event) => {
              setVehicleModel(event.target.value);
            }}
          />

          <label htmlFor="location">Located Country:</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />

          <label htmlFor="price">Price For a Day:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="$"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            required
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />

          <label htmlFor="desc">Vehicle Description:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            required
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />

          <button type="submit" onClick={handleAddData}>
            Add Vehicle
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddVehicle;
