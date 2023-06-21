import {
  faBed,
  faCalendarDays,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchBar from "../searchBar/SearchBar";

const Header = ({ type, activePage }) => {
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div
            className={`headerListItem ${
              activePage === "hotel" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <a href="">
              <span>Hotels</span>
            </a>
          </div>
          <div
            className={`headerListItem ${
              activePage === "restaurant" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faPlane} />
            <span>Restaurants</span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "travel" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "attractions" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div
            className={`headerListItem ${
              activePage === "packages" ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <span>Packages</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className="headerBottomWrapper">
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free TravelWise account
              </p>
              <button className="headerBtn">Sign in / Register</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
