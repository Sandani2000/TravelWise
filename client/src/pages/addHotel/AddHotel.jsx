import "./addHotel.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import Header from "../../components/hotelheader/hotelHeader";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddHotel = () => {
  const [HotelName, setHotelName] = useState("");
  const [Hoteltype, setHoteltype] = useState("");
  const [HotelCity, setHotelCity] = useState("");
  const [HotelAddress, setHotelAddress] = useState("");
  const [HotelDistance, setHotelDistance] = useState("");
  const [Hoteltitle, setHoteltitle] = useState("");
  const [Hoteldesc, setHoteldesc] = useState("");
  const [HotelcheapestPrice, setHotelcheapestPrice] = useState("");
  const navigate = useNavigate();

  const handleAddData = async (event) => {
    event.preventDefault();

    const hotel = {
      name: HotelName,
      type: Hoteltype,
      city: HotelCity,
      address: HotelAddress,
      distance: HotelDistance,
      title: Hoteltitle,
      desc: Hoteldesc,
      cheapestPrice: HotelcheapestPrice,
    };

    await axios.post("/hotels", hotel);

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer1">
        <h1>Create new Hotel</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(event) => {
              setHotelName(event.target.value);
            }}
          />

          <label htmlFor="type">Hotel type:</label>
          <input
            type="text"
            id="type"
            name="type"
            required
            onChange={(event) => {
              setHoteltype(event.target.value);
            }}
          />

          <label htmlFor="city">city:</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            onChange={(event) => {
              setHotelCity(event.target.value);
            }}
          />

          <label htmlFor="address">Hotel address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            onChange={(event) => {
              setHotelAddress(event.target.value);
            }}
          />

          <label htmlFor="distance">distance :</label>
          <input
            type="text"
            id="distance"
            name="distance"
            required
            onChange={(event) => {
              setHotelDistance(event.target.value);
            }}
          />

          <label htmlFor="title">Hotel title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(event) => {
              setHoteltitle(event.target.value);
            }}
          />

          <label htmlFor="desc">description:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            required
            onChange={(event) => {
              setHoteldesc(event.target.value);
            }}
          />

          <label htmlFor="cheapestPrice">Cheapest price:</label>
          <input
            type="number"
            id="cheapestPrice"
            name="cheapestPrice"
            required
            onChange={(event) => {
              setHotelcheapestPrice(event.target.value);
            }}
          />

          <button type="submit" onClick={handleAddData}>
            Add Hotel
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddHotel;
