import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditRestaurant() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({
    Restaurant_Name: "",
    Location: "",
    description: "",
    Opening_Hours: "",
    breakfastMenu: "",
    breakfastPrice: "",
    lunchfastMenu: "",
    lunchkfastPrice: "",
    dinnerMenu: "",
    dinnerPrice: "",
    numTables: "",
  });

  useEffect(() => {
    axios.get(`/api/restaurant/${id}`).then((res) => {
      if (res?.data) {
        setRestaurant({
          Restaurant_Name: res.data.Restaurant_Name,
          Location: res.data.Location,
          Opening_Hours: res.data.Opening_Hours,
          breakfastMenu: res.data.breakfastMenu,
          breakfastPrice: res.data.breakfastPrice,
          lunchMenu: res.data.lunchMenu,
          lunchPrice: res.data.lunchPrice,
          dinnerMenu: res.data.dinnerMenu,
          dinnerPrice: res.data.dinnerPrice,
        });
      }
    });
  }, [id]);

  useEffect(() => {
    console.log(restaurant);
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Restaurant_Name: restaurant.Restaurant_Name,
      Location: restaurant.Location,
      Opening_Hours: restaurant.Opening_Hours,
      breakfastMenu: restaurant.breakfastMenu,
      breakfastPrice: restaurant.breakfastPrice,
      lunchMenu: restaurant.lunchMenu,
      lunchPrice: restaurant.lunchPrice,
      dinnerMenu: restaurant.dinnerMenu,
      dinnerPrice: restaurant.dinnerPrice,
    };

    await axios.put(`/api/restaurant/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Restaurant Updated Successfully !!");
        setRestaurant({
          Restaurant_Name: "",
          Location: "",
          Opening_Hours: "",
          description: "",
          breakfastMenu: "",
          breakfastPrice: "",
          lunchfastMenu: "",
          lunchkfastPrice: "",
          dinnerMenu: "",
          dinnerPrice: "",
          numTables: "",
        });
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{ color: "#1A385A" }}>
        EDIT RESTAURANT
      </h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            name="Restaurant_Name"
            placeholder="Enter the name of Restaurant"
            value={restaurant.Restaurant_Name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>
            Location
          </label>
          <input
            type="text"
            className="form-control"
            name="Location"
            placeholder="Enter the location of Restaurant"
            value={restaurant.Location}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>
            Description
          </label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Enter the description of the Restaurant"
            value={restaurant.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>
            Opening Hours
          </label>
          <input
            type="text"
            className="form-control"
            name="Opening_Hours"
            placeholder="Enter your  Opening Hours"
            value={restaurant.Opening_Hours}
            onChange={handleInputChange}
          />
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Breakfast Menu
              </label>
              <input
                type="text"
                className="form-control"
                name="breakfastMenu"
                placeholder="Item Name"
                value={restaurant.breakfastMenu}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="breakfastPrice"
                placeholder="Item Price"
                value={restaurant.breakfastPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Lunch Menu
              </label>
              <input
                type="text"
                className="form-control"
                name="lunchMenu"
                placeholder="Item Name"
                value={restaurant.lunchMenu}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="lunchPrice"
                placeholder="Item Price"
                value={restaurant.lunchPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Dinner Menu
              </label>
              <input
                type="text"
                className="form-control"
                name="dinnerMenu"
                placeholder="Item Name"
                value={restaurant.dinnerMenu}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                Price
              </label>
              <input
                type="text"
                className="form-control"
                name="dinnerPrice"
                placeholder="Item Price"
                value={restaurant.dinnerPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px", color: "#1A385A" }}>
            Number of Tables
          </label>
          <input
            type="number"
            className="form-control"
            name="numTables"
            placeholder="Enter the number of tables at the Restaurant"
            value={restaurant.numTables}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px", backgroundColor: "#034752" }}
          onClick={onSubmit}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
  );
}
