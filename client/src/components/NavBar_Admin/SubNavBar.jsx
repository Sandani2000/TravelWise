import React from "react";
import "./SubNavBar.scss";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const SubNavBar = () => {
  return (
    <div className="SubNavBar">
      <div className="left">
        <ul class="mainList">
          <li class="subList">
            <Link className="Link" to={"/employee/"}>
              Personal Info
            </Link>
          </li>

          <li class="subList">
            <Link className="Link" to={"/employee/hrInfo"}>
              HR Info
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavBar;
