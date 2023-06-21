import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CampaignIcon from "@mui/icons-material/Campaign";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import "./Widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "users":
      data = {
        title: "Total Users",
        count: 10,
        icon: <PersonIcon className="icon" />,
        backgroundColor: "#34d5eb",
      };
      break;

    case "employees":
      data = {
        title: "Total Staff",
        count: 10,
        icon: <PeopleAltIcon className="icon" />,
        backgroundColor: "#f5fc0f",
      };
      break;

    case "notices":
      data = {
        title: "Total Notices",
        count: 10,
        icon: <CampaignIcon className="icon" />,
        backgroundColor: "#f769fa",
      };
      break;

    case "leaves":
      data = {
        title: "Leave Employees",
        count: 10,
        icon: <EnergySavingsLeafIcon className="icon" />,
        backgroundColor: "#a8ff82",
      };
      break;
    default:
      break;
  }

  return (
    <div className="Widget" style={{ backgroundColor: data.backgroundColor }}>
      {data.icon}
      <div className="info">
        <div className="left">
          <span className="title">{data.title}</span>
        </div>
        <div className="right">
          <span className="count">{data.count}</span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
