import React from "react";
import "./View.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";

const View = () => {
  return (
    <div className="View">
      <SideBar />
      <div className="viewContainer">
        <NavBar />
        Single
      </div>
    </div>
  );
};

export default View;
