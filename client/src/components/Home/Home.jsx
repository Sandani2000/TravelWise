import React from "react";
import "./Home.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";
import Widget from "../../Components/Widgets/Widget";
import Featured from "../../Components/Featured/Featured";
import BarChart from "../../Components/Charts/BarChart/BarChart";

const Home = () => {
  return (
    <div className="Home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="employees" />
          <Widget type="notices" />
          <Widget type="leaves" />
        </div>
        <div className="stats">
          <Featured />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
