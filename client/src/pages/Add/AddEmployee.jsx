import React, { useState } from "react";
import axios from "axios";
import "./AddEmployee.scss";
import NavBar from "../../components/NavBar_Admin/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddEmployee = () => {
  const navigat = useNavigate();

  const [formData, setFormData] = useState({
    empfName: "",
    emplName: "",
    empEmail: "",
    empDesignation: "",
    empDepartement: "",
    empHiringDate: "",
    empBirthday: "",
    empPhone: "",
    empGender: "",
    empUsername: "",
    empPassword: "",
  });

  function sendData(e) {
    console.log(formData);

    axios
      .post("http://localhost:8060/employee/add", formData)
      .then(() => {
        alert("Employee added Successfuly");
        // navigat("employee/");

        // //get updated list again after deletetion
        // axios
        //   .get("http://localhost:8060/employee/")
        //   .then((res) => {
        //     setEmployees(res.data);
        //   })
        //   .catch((err) => {
        //     alert(err.message);
        //   });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="AddEmployee">
      <SideBar />

      <div className="container">
        <NavBar />

        <div className="top">
          <Link to="/employee">
            <ArrowBackIcon className="ArrowIcon" />
          </Link>
          <span>Add New Employee</span>
        </div>

        <div className="bottom">
          <form onSubmit={sendData}>
            {/* row1 */}
            <div className="row1">
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="empfName"
                  onChange={(e) => {
                    setFormData({ ...formData, empfName: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="EmplName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="emplName"
                  onChange={(e) => {
                    setFormData({ ...formData, emplName: e.target.value });
                  }}
                />
              </div>
            </div>

            {/* row2 */}
            <div className="row2">
              <div className="form-group">
                <label htmlFor="empEmail">Personal Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="empEmail"
                  onChange={(e) => {
                    setFormData({ ...formData, empEmail: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="empPhone">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="empPhone"
                  onChange={(e) => {
                    setFormData({ ...formData, empPhone: e.target.value });
                  }}
                />
              </div>

              <div className="form-group" id="empGender">
                <label htmlFor="empGender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="empGender"
                  onChange={(e) => {
                    setFormData({ ...formData, empGender: e.target.value });
                  }}
                />
                {/* <input
                    type="radio"
                    id="empGender"
                    name="gender"
                    value="Male"
                    // checked={selectedGender === "male"}
                    onChange={(e) => {
                      setEmpGender(e.target.value);
                    }}
                  />
                  Male
                  <input
                    type="radio"
                    id="empGender"
                    name="gender"
                    value="Female"
                    // checked={selectedGender === "male"}
                    onChange={(e) => {
                      setEmpGender(e.target.value);
                    }}
                  />
                  Female */}
              </div>
            </div>

            <div className="row3">
              <div className="form-group" id="dropdown">
                <label htmlFor="empDepartement">Departement</label>

                <select
                  id="empDepartement"
                  className="form-control"
                  value={formData.empDepartement}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      empDepartement: e.target.value,
                    });
                  }}
                >
                  <option value="Human Resource-HR">Human Resource-HR</option>
                  <option value="Hotel Management">Hotel Management</option>
                  <option value="Transport Management">
                    Transport Management
                  </option>
                  <option value="Restaurant Management">
                    Restaurant Management
                  </option>
                  <option value="Destination Management">
                    Destination Management
                  </option>
                  <option value="User Management">User Management</option>
                  <option value="Flight Management">Flight Management</option>
                </select>
              </div>
            </div>
            <div className="row4">
              <div className="form-group">
                <label htmlFor="empDesignation">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="empDesignation"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      empDesignation: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            {/* row5 */}
            <div className="row5">
              <div className="form-group">
                <label htmlFor="empHiringDate">Hiring Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="empHiringDate"
                  onChange={(e) => {
                    setFormData({ ...formData, empHiringDate: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="empBirthday">Birth Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="empBirthday"
                  onChange={(e) => {
                    setFormData({ ...formData, empBirthday: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="row6">
              <div className="form-group">
                <label htmlFor="empUsername">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="empUsername"
                  onChange={(e) => {
                    setFormData({ ...formData, empUsername: e.target.value });
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="empPassword">Password </label>
                <input
                  type="password"
                  className="form-control"
                  id="empPassword"
                  onChange={(e) => {
                    setFormData({ ...formData, empPassword: e.target.value });
                  }}
                  required
                />
              </div>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
