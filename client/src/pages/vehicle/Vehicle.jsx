import "./vehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Reserve from "../../components/reserve/Reserve";

const Vehicle = () => {
  const directory = useLocation();
  const id = directory.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const { data, loading } = useFetch(`/api/vehicles/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="vehicleContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="vehicleWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="vehicleTitle">{data.name}</h1>
            <div className="vehicleAddress">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span className="vehiclePriceHighlight">
              Book a vehicle over ${data.price} and get a free airport service
            </span>
            <div className="vehicleImages">
              {data.photos?.map((photo, i) => (
                <div className="vehicleImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="vehicleImg"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* <MailList /> */}
          <Footer />
        </div>
      )}
      {openModel && <Reserve setOpen={setOpenModel} vehicleId={id} />}
    </div>
  );
};

export default Vehicle;
