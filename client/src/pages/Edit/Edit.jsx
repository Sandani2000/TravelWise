import React, { useEffect, useState } from "react";
import "./Edit.scss";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar_Admin/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8060/employee/get/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();

    axios
      .put("http://localhost:8060/employee/update/" + id, data)
      .then((res) => {
        alert("Data updated successfully !");
        navigate("/");
      });
  }

  return (
    <div className="Edit">
      <SideBar />

      <div className="container">
        <NavBar />

        <div className="top">
          <Link to="/employee">
            <ArrowBackIcon className="ArrowIcon" />
          </Link>
          <span>Edit Employee</span>
        </div>

        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <span>Employee ID : {id}</span>
            {/* row1 */}
            <div className="row1">
              <div className="form-group" style={{ paddingTop: "10px" }}>
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="empfName"
                  value={data.empfName}
                  onChange={(e) =>
                    setData({ ...data, empfName: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="EmplName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="emplName"
                  value={data.emplName}
                  onChange={(e) =>
                    setData({ ...data, emplName: e.target.value })
                  }
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
                  value={data.empEmaail}
                  onChange={(e) =>
                    setData({ ...data, empEmail: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="empPhone">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="empPhone"
                  value={data.empPhone}
                  onChange={(e) =>
                    setData({ ...data, empPhone: e.target.value })
                  }
                />
              </div>

              <div className="form-group" id="empGender">
                <label htmlFor="empGender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="empGender"
                  value={data.empGender}
                  onChange={(e) =>
                    setData({ ...data, empGender: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="row3">
              <div className="form-group" id="dropdown">
                <label htmlFor="empDepartement">Departement</label>

                <select
                  id="empDepartement"
                  value={data.empDepartement}
                  className="form-control"
                  onChange={(e) =>
                    setData({ ...data, empDepartement: e.target.value })
                  }
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
                  value={data.empDesignation}
                  onChange={(e) =>
                    setData({ ...data, empDesignation: e.target.value })
                  }
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
                  value={data.empHiringDate}
                  id="empHiringDate"
                  onChange={(e) =>
                    setData({ ...data, empHiringDate: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="empBirthday">Birth Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={data.empBirthday}
                  id="empBirthday"
                  onChange={(e) =>
                    setData({ ...data, empBirthday: e.target.value })
                  }
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
                  value={data.empUsername}
                  required
                  onChange={(e) =>
                    setData({ ...data, empUsername: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="empPassword">Password </label>
                <input
                  type="password"
                  className="form-control"
                  value={data.empPassword}
                  id="empPassword"
                  required
                  onChange={(e) =>
                    setData({ ...data, empPassword: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Edit;
