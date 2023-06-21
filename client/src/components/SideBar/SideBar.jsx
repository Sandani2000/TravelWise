import React from "react";
import "./SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

import CampaignIcon from "@mui/icons-material/Campaign";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="top">
        <span className="logo">TravelWise Admin</span>
      </div>
      <div className="center">
        <p className="title">Main</p>
        <ul>
          <Link to="/" className="link">
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <SwitchAccountIcon />
              <span>Profile</span>
            </li>
          </Link>

          {/* <Link to="" className="link">
            <li>
              <PeopleAltIcon />
              <span>Users</span>
            </li>
          </Link> */}

          <Link to="/employee/" className="link">
            <li>
              <SupervisedUserCircleIcon />
              <span>Employees</span>
            </li>
          </Link>

          {/* <Link to="" className="link">
            <li>
              <ForumIcon />
              <span>Feedbacks</span>
            </li>
          </Link> */}

          <Link to="" className="link">
            <li>
              <ChecklistIcon />
              <span>Attendance</span>
            </li>
          </Link>

          <Link to="/notice/" className="link">
            <li>
              <CampaignIcon />
              <span>Staff Notices</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <TextSnippetIcon />
              <span>Report Generations</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="bottom">
        <p className="title">Stattistic Graphs</p>
        <ul>
          <Link to="" className="link">
            <li>
              <BarChartIcon />
              <span>Bar chart</span>
            </li>
          </Link>

          <Link to="" className="link">
            <li>
              <PieChartIcon />
              <span>Pie Chart</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="themes">
        <p className="title">Themes</p>
        <div className="themeOption">
          <span>Dark</span>
        </div>
        <div className="themeOption">
          <span>Light</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
