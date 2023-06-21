import React, { Component } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default class AddRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      Restaurant_Name,
      Location,
      description,
      Opening_Hours,
      breakfastMenu,
      breakfastPrice,
      lunchMenu,
      lunchPrice,
      dinnerMenu,
      dinnerPrice,
      numTables,
    } = this.state;

    const data = {
      Restaurant_Name,
      Location,
      description,
      Opening_Hours,
      breakfastMenu,
      breakfastPrice,
      lunchMenu,
      lunchPrice,
      dinnerMenu,
      dinnerPrice,
      numTables,
    };

    await axios.post("/api/restaurant/save", data).then((res) => {
      if (res.data.success) {
        alert("New Restaurant Added Successfully !!");
        this.setState({
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
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="col-md-8 mt-2 mx-auto">
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ color: "#1A385A" }}
            >
              ADD A NEW RESTAURANT
            </h1>
            <form className="needs-validation" noValidate>
              <div></div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label style={{ marginBottom: "5px", color: "#1A385A" }}>
                  Restaurant Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Restaurant_Name"
                  placeholder="Enter the name of the Restaurant"
                  value={this.state.Restaurant_Name}
                  onChange={this.handleInputChange}
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
                  placeholder="Enter the Location of the Restaurant"
                  value={this.state.Location}
                  onChange={this.handleInputChange}
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
                  value={this.state.description}
                  onChange={this.handleInputChange}
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
                  placeholder="Enter the opening hours of the Restaurant"
                  value={this.state.Opening_Hours}
                  onChange={this.handleInputChange}
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
                      name="breakfastMenu3"
                      placeholder="Item Name"
                      value={this.state.breakfastMenu2}
                      onChange={this.handleInputChange}
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
                      value={this.state.breakfastPrice2}
                      onChange={this.handleInputChange}
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
                      placeholder="Item Name of the Restaurant"
                      value={this.state.lunchMenu}
                      onChange={this.handleInputChange}
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
                      placeholder="Item Price of the Restaurant"
                      value={this.state.lunchPrice}
                      onChange={this.handleInputChange}
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
                      placeholder="Item Name of the Restaurant"
                      value={this.state.dinnerMenu}
                      onChange={this.handleInputChange}
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
                      placeholder="Item Price of the Restaurant"
                      value={this.state.dinnerPrice}
                      onChange={this.handleInputChange}
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
                  value={this.state.numTables}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ marginTop: "5px" }}
                  onClick={this.onSubmit}
                >
                  ADD RESTAURANT
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
