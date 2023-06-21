import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NoticeList.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";

const NoticeList = () => {
  const [notices, setNotices] = useState([]); //empty array

  useEffect(() => {
    function getNotices() {
      axios
        .get("http://localhost:8060/notice/")
        .then((res) => {
          //   console.log(res.data);
          setNotices(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getNotices();
  }, []);

  // Handele Delete function
  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete ");

    if (confirm) {
      axios
        .delete("http://localhost:8060/notice/delete/" + id)
        .then((res) => {
          alert("Notice has deleted sucessfully");

          //get updated list again after deletetion
          axios
            .get("http://localhost:8060/notice/")
            .then((res) => {
              setNotices(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="NoticeList">
      <SideBar />
      <div className="NoticeListContainer">
        <NavBar />
        <div className="subContainer">
          <div className="dataTableTitle">
            <FormatListBulletedIcon className="iconList" />
            <span style={{ flex: 1 }}>All Notices</span>

            <Link to="/notice/add" className="link">
              <AddCircleOutlineIcon className="iconAdd" />
              Add a new Notice
            </Link>
          </div>

          <table className="table table-bordered">
            <thead className="table">
              <tr>
                <td style={{ textAlign: "30px", width: "20px" }}>ID</td>
                <td style={{ paddingLeft: "center", width: "60px" }}>Title</td>
                <td style={{ textAlign: "center", width: "300px" }}>
                  Descreption
                </td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  From Date
                </td>
                <td style={{ textAlign: "center" }}>Published By</td>
                <td style={{ textAlign: "center" }}>Published To</td>
                <td style={{ textAlign: "center", width: "100px" }}>
                  Published On
                </td>
                <td style={{ textAlign: "center" }}>Actions</td>
              </tr>
            </thead>

            <tbody>
              {notices.map((notice, i) => (
                <tr key={i}>
                  <td>{notice.id}</td>
                  <td>{notice.nTitle}</td>
                  <td>{notice.nDescription}</td>
                  <td>{notice.nFromDate}</td>
                  <td>{notice.nPublishBy}</td>
                  <td>{notice.nPublishTo}</td>
                  <td>{notice.nPublishedOn}</td>
                  <td
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`./update/${notice._id}`}>
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
                      type="submit"
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(notice._id)}
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

export default NoticeList;
