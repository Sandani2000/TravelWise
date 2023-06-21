import React, { useEffect, useState } from "react";
import "./EditNotice.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar_Admin/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const EditNotice = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8060/notice/get/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    // e.preventDefault();

    axios.put("http://localhost:8060/notice/update/" + id, data).then((res) => {
      alert("Data updated successfully !");
      navigate("/");
    });
  }

  return (
    <div className="AddNotice">
      <SideBar />

      <div className="container">
        <NavBar />

        <div className="top">
          <Link to="/notice">
            <ArrowBackIcon className="ArrowIcon" />
          </Link>
          <span>Edit Notice</span>
        </div>

        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <span>Notice ID : {id}</span>
            {/* row1 */}
            <div className="row1">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="nTitle"
                  value={data.nTitle}
                  onChange={(e) => setData({ ...data, nTitle: e.target.value })}
                />
              </div>
            </div>

            {/* row2 */}
            <div className="row2">
              <div className="form-group">
                <label
                  htmlFor="nDescription"
                  style={{ position: "absolute", bottom: "140px" }}
                >
                  Descreption
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="nDescription"
                  style={{ height: "150px" }}
                  value={data.nDescription}
                  onChange={(e) =>
                    setData({ ...data, nDescription: e.target.value })
                  }
                />
              </div>
            </div>

            {/* row3 */}
            <div className="row3">
              <div className="form-group" id="empGender">
                <label htmlFor="nPublishBy">Publish By</label>
                <input
                  type="text"
                  className="form-control"
                  id="nPublishBy"
                  value={data.nPublishBy}
                  onChange={(e) =>
                    setData({ ...data, nPublishBy: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group" id="dropdown">
              <label htmlFor="nPublishTo">Publish To</label>

              <select
                id="nPublishTo"
                className="form-control"
                value={data.nPublishTo}
                onChange={(e) =>
                  setData({ ...data, nPublishTo: e.target.value })
                }
              >
                <option value="System Admin">System Admin</option>
                <option value="Hotel Management">Hotel Manager</option>
                <option value="Transport Manager">Transport Manager</option>
                <option value="Restaurant Manager">Restaurant Manager</option>
                <option value="Destination Manager">Destination Manager</option>
                <option value="User Manager">User Manager</option>
                <option value="Flight Manager">Flight Manager</option>
              </select>
            </div>

            <div className="dates">
              <div className="row5">
                <div className="form-group">
                  <label htmlFor="nPublishedOn">Published On</label>
                  <input
                    type="date"
                    className="form-control"
                    id="nPublishedOn"
                    value={data.nPublishedOn}
                    onChange={(e) =>
                      setData({ ...data, nPublishedOn: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="row5">
                <div className="form-group">
                  <label htmlFor="nFromDate">From Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="nFromDate"
                    value={data.nFromDate}
                    onChange={(e) =>
                      setData({ ...data, nFromDate: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn btn-primary">Publish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditNotice;
