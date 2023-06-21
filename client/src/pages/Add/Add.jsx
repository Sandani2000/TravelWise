import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import axios from "axios";
import "./Add.scss";

const Add = ({ inputs, title }) => {
  // const [file, setFile] = useState("");
  // console.log(file);

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
    e.preventDefault(); // to prevent normal behaviour of submit
    const newEmployee = {
      empfName: formData.empfName,
      emplName: formData.emplName,
      empEmail: formData.empEmail,
      empDesignation: formData.empDesignation,
      empDepartement: formData.empDepartement,
      empHiringDate: formData.empHiringDate,
      empBirthday: formData.empBirthday,
      empPhone: formData.empPhone,
      empGender: formData.empGender,
      empUsername: formData.empUsername,
      empPassword: formData.empPassword,
    };

    // console.log(newEmployee);

    axios
      .post("http://localhost:3035/employee/add", newEmployee)
      .then(() => {
        alert("Employee added");
        // setName=("");
        // setAge=("");
        // setGender=("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="Add">
      <SideBar />
      <div className="addContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          {/* <div className="left">
            <label htmlFor="file">
              <AddPhotoAlternateIcon className="iconImg" />
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div> */}

          <div className="right">
            {/* Add new Employee Form */}
            <form onSubmit={sendData}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    // placeholder={input.placeholder}
                    onChange={(e) => {
                      setFormData(e.target.value);
                    }}
                  />
                </div>
              ))}

              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
