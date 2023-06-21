import React, { useState } from "react";
import axios from "axios";
import "./AddNotice.scss";
import NavBar from "../../components/NavBar_Admin/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddNotice = () => {
  const navigat = useNavigate();

  const [formData, setFormData] = useState({
    nTitle: "",
    nDescription: "",
    nFromDate: "",
    empDesignation: "",
    nPublishBy: "",
    nPublishTo: "",
    nPublishedOn: "",
  });

  function sendData(e) {
    // console.log(formData);

    axios
      .post("http://localhost:8060/notice/add", formData)
      .then(() => {
        alert("Notice added Successfuly");
        navigat("/notice");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="AddNotice">
      <SideBar />

      <div className="container">
        <NavBar />

        <div className="top">
          <Link to="/notice">
            <ArrowBackIcon className="ArrowIcon" />
          </Link>
          <span>Add New Notice</span>
        </div>

        <div className="bottom">
          <form onSubmit={sendData}>
            {/* row1 */}
            <div className="row1">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="nTitle"
                  onChange={(e) => {
                    setFormData({ ...formData, nTitle: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* row2 */}
            <div className="row2">
              <div className="form-group">
                <label
                  htmlFor="nDescription"
                  style={{ position: "absolute", bottom: "140px" }}
                >
                  Descreption
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="nDescription"
                  style={{ height: "150px" }}
                  onChange={(e) => {
                    setFormData({ ...formData, nDescription: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* row3 */}
            <div className="row3">
              <div className="form-group" id="empGender">
                <label htmlFor="nPublishBy">Publish By</label>
                <input
                  type="text"
                  className="form-control"
                  id="nPublishBy"
                  onChange={(e) => {
                    setFormData({ ...formData, nPublishBy: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="form-group" id="dropdown">
              <label htmlFor="nPublishTo">Publish To</label>

              <select
                id="nPublishTo"
                className="form-control"
                value={formData.nPublishTo}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    nPublishTo: e.target.value,
                  });
                }}
              >
                <option value="System Admin">System Admin</option>
                <option value="Hotel Management">Hotel Manager</option>
                <option value="Transport Manager">Transport Manager</option>
                <option value="Restaurant Manager">Restaurant Manager</option>
                <option value="Destination Manager">Destination Manager</option>
                <option value="User Manager">User Manager</option>
                <option value="Flight Manager">Flight Manager</option>
              </select>
            </div>

            <div className="dates">
              <div className="row5">
                <div className="form-group">
                  <label htmlFor="nPublishedOn">Published On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="nPublishedOn"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        nPublishedOn: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="row5">
                <div className="form-group">
                  <label htmlFor="nFromDate">From Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="nFromDate"
                    onChange={(e) => {
                      setFormData({ ...formData, nFromDate: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary">Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
