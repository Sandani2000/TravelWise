import React from "react";
import "./HR.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SubNavBar from "../../Components/NavBar_Admin/SubNavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const HR = () => {
  const [employees, setEmployees] = useState([]); //empty array

  useEffect(() => {
    function getEmployees() {
      axios
        .get("http://localhost:8060/employee/")
        .then((res) => {
          console.log(res.data);
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getEmployees();
  }, []);
  return (
    <div className="HR">
      <SideBar />
      <div className="HRContainer">
        <NavBar />
        <SubNavBar />

        <div className="subContainer">
          <div className="dataTableTitle">
            <FormatListBulletedIcon className="iconList" />
            <span style={{ flex: 1 }}>HR Data</span>

            <Link to="/employee/add" className="link">
              <AddCircleOutlineIcon className="iconAdd" />
              Add New Employee
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="table">
              <tr>
                <td style={{ textAlign: "30px", width: "20px" }}>ID</td>
                <td style={{ paddingLeft: "center" }}>Full Name</td>
                {/* <td style={{ textAlign: "center" }}>Last Name</td> */}
                <td style={{ textAlign: "center" }}>Hiring Date</td>
                <td style={{ textAlign: "center" }}>Username</td>
                <td style={{ textAlign: "center" }}>Password</td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  Actions
                </td>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>
                    {employee.empfName} {employee.emplName}
                  </td>
                  {/* <td>{employee.emplName}</td> */}
                  <td>{employee.empHiringDate}</td>
                  <td>{employee.empUsername}</td>
                  <td>{employee.empPassword}</td>
                  <td
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`./update/${employee._id}`}>
                      <button
                        type="submit"
                        className="btn btn-warning"
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </button>
                    </Link>
                    {/* <Link to={"./get/"}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                      >
                        View
                      </button>
                    </Link> */}
                    <Link to={"./delete"}>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HR;
