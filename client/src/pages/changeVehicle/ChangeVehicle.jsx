import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./changeVehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { Modal } from "../../components/modal/Modal";
import { useNavigate } from "react-router-dom";

const ChangeVehicle = () => {
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [selectedVehicleIndex, setselectedVehicleIndex] = useState(-1);
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const { data, reFetch } = useFetch(`/api/vehicles`);
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/AddVehicle");
  };

  useEffect(() => {
    if (data) {
      setVehicleName(
        data[selectedVehicleIndex]?.name ? data[selectedVehicleIndex].name : ""
      );
      setVehicleNumber(
        data[selectedVehicleIndex]?.number
          ? data[selectedVehicleIndex].number
          : ""
      );
      setVehicleType(
        data[selectedVehicleIndex]?.type ? data[selectedVehicleIndex].type : ""
      );
      setVehicleModel(
        data[selectedVehicleIndex]?.model
          ? data[selectedVehicleIndex].model
          : ""
      );
      setLocation(
        data[selectedVehicleIndex]?.location
          ? data[selectedVehicleIndex].location
          : ""
      );
      setPrice(
        data[selectedVehicleIndex]?.price
          ? data[selectedVehicleIndex].price
          : ""
      );
      setRating(
        data[selectedVehicleIndex]?.rating
          ? data[selectedVehicleIndex].rating
          : ""
      );
      setDescription(
        data[selectedVehicleIndex]?.desc ? data[selectedVehicleIndex].desc : ""
      );
    }
  }, [selectedVehicleIndex]);

  const closeEditorPopup = () => {
    setIsEditPopupVisible(false);
  };

  const updateVehicle = async (event) => {
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

    await axios.put(`/api/vehicles/${data[selectedVehicleIndex]._id}`, vehicle);

    setIsEditPopupVisible(false);
    reFetch();
  };
  const handleNameChange = (event) => {
    setVehicleName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setVehicleNumber(event.target.value);
  };
  const handleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };
  const handleModelChange = (event) => {
    setVehicleModel(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handleDescritionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <button className="backButton" onClick={handleBackButton}>
          <FontAwesomeIcon icon={faPlus} /> Add Vehicle
        </button>
        <table style={{ width: 700 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Model</th>
              <th>Number</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((vehicle, index) => {
                const handleEditCLick = () => {
                  setIsEditPopupVisible(true);
                  setselectedVehicleIndex(index);
                };

                const handleDeleteClick = async () => {
                  const confirm = window.confirm("Do you want to delete ");

                  if (confirm) {
                  await axios.delete(
                    `/api/vehicles/${data[index]._id}`,
                    vehicle
                  );

                  reFetch();
                  }
                };

                return (
                  <tr key={index}>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.tytde}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.number}</td>
                    <td>
                      <button onClick={handleEditCLick}>Edit</button>
                    </td>
                    <td>
                      <button onClick={handleDeleteClick}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isEditPopupVisible && (
          <Modal title="Edit Vehicle Details" closePopup={closeEditorPopup}>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={vehicleName}
                  onChange={handleNameChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="number">Vehicle Number:</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={vehicleNumber}
                  onChange={handleNumberChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="type">Vehicle Type:</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  required
                  value={vehicleType}
                  onChange={handleTypeChange}
                />
              </div>

              <div>
                <label htmlFor="model">Model:</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  required
                  value={vehicleModel}
                  onChange={handleModelChange}
                />
              </div>

              <div>
                <label htmlFor="location">Located Country:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={location}
                  onChange={handleLocationChange}
                />
              </div>

              <div>
                <label htmlFor="price">Price For a Day:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="$"
                  required
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>

              <div>
                <label htmlFor="rating">Rating:</label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  required
                  value={rating}
                  onChange={handleRatingChange}
                />
              </div>

              <div>
                <label htmlFor="desc">Vehicle Description:</label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  required
                  value={description}
                  onChange={handleDescritionChange}
                />
              </div>

              <button type="submit" onClick={updateVehicle}>
                Change Vehicle
              </button>
            </form>
          </Modal>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default ChangeVehicle;
