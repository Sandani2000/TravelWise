import React from "react";
import "./Personal.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SubNavBar from "../../Components/NavBar_Admin/SubNavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const [employees, setEmployees] = useState([]); //empty array
  const navigate = useNavigate();
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

  // Handele Delete function
  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete ");

    if (confirm) {
      axios
        .delete("http://localhost:8060/employee/delete/" + id)
        .then((res) => {
          alert("Employee has deleted sucessfully");

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
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="Personal">
      <SideBar />
      <div className="PersonalContainer">
        <NavBar />
        <SubNavBar />

        <div className="subContainer">
          <div className="dataTableTitle">
            <FormatListBulletedIcon className="iconList" />
            <span style={{ flex: 1 }}>Personal Data</span>

            <Link to="/employee/add" className="link">
              <AddCircleOutlineIcon className="iconAdd" />
              Add New Employee
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="table">
              <tr>
                <td style={{ textAlign: "30px", width: "20px" }}>ID</td>
                <td style={{ paddingLeft: "center" }}>First Name</td>
                <td style={{ textAlign: "center" }}>Last Name</td>
                <td style={{ textAlign: "center" }}>Email</td>
                <td style={{ textAlign: "center" }}>Gender</td>
                <td style={{ textAlign: "center" }}>Birth Date</td>
                <td style={{ textAlign: "center" }}>Contact</td>
                <td style={{ textAlign: "center" }}>Actions</td>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.empfName}</td>
                  <td>{employee.emplName}</td>
                  <td>{employee.empEmail}</td>
                  <td>{employee.empGender}</td>
                  <td>{employee.empBirthday}</td>
                  <td>{employee.empPhone}</td>
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

                    <button
                      onClick={(e) => handleDelete(employee._id)}
                      type="submit"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
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

export default Personal;
