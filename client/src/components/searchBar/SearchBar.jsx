import {
  faCalendarDays,
  faLocationDot,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchBar.css";
import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { fetchFilterdVehicleData } from "../../useEffects/fetchFilterdVehicleData";

const SearchBar = ({
  setVehicleDataList,
  selectedCountryData,
  selectedCityData,
  filterPage,
}) => {
  const [vehicleList, setvehicleList] = useState([]);
  const [countryList, setcountryList] = useState([]);
  const [cityList, setcityList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(selectedCountryData);
  const [selectedCity, setSelectedCity] = useState(selectedCityData);
  const [min, setMin] = useState(0);
  const [max, setmax] = useState(999);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedCountry && countryList.length > 0) {
      setSelectedCountry(countryList[0]);
    }

    updateCityList();
  }, [countryList]);

  useEffect(() => {
    updateCityList();
    setSelectedCity(undefined);
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedCity && cityList[0]) setSelectedCity(cityList[0]);
  }, [cityList]);

  const fetchData = async () => {
    const vehicleList = await axios.get("/api/vehicles");

    if (vehicleList?.data) {
      setvehicleList(vehicleList.data);
      const countryListTemp = [];

      for (const vehicle of vehicleList.data) {
        if (!countryListTemp.includes(vehicle.location)) {
          countryListTemp.push(vehicle.location);
        }
      }

      setcountryList(countryListTemp);
    }
  };

  const updateCityList = () => {
    const cityListTemp = [];

    for (const vehicle of vehicleList) {
      if (
        vehicle.location === selectedCountry &&
        !cityListTemp.includes(vehicle.city)
      ) {
        cityListTemp.push(vehicle.city);
      }
    }

    setcityList(cityListTemp);
  };

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = async () => {
    if (selectedCountryData || selectedCityData) {
      const result = await fetchFilterdVehicleData(
        selectedCountry,
        selectedCity,
        min,
        max
      );
      setVehicleDataList(result);
    } else {
      navigate("/vehicleList", {
        state: { selectedCountry, selectedCity, date, options },
      });
    }
  };

  const handleCountrySelect = (event) => {
    if (event.target.value) setSelectedCountry(event.target.value);
  };

  const handleCitySelect = (event) => {
    if (event.target.value) setSelectedCity(event.target.value);
  };

  return (
    <div
      className={`headerSearch ${filterPage ? "headerSearchFilterPage" : ""}`}
    >
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
        <p
          className={`headerSearchInput ${
            filterPage ? "headerSearchInputFilterPage" : ""
          }`}
        >
          Where are you going?
        </p>
        <select
          name="country"
          id="country"
          onChange={handleCountrySelect}
          value={selectedCountry}
        >
          {countryList.sort() &&
            countryList.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
        </select>
        <select
          name="country"
          id="country"
          onChange={handleCitySelect}
          value={selectedCity}
        >
          {cityList.sort() &&
            cityList.map((city, index) => {
              return (
                <option key={index} value={city}>
                  {city}
                </option>
              );
            })}
        </select>
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText"
        >{`${options.people} people`}</span>
        {openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">People</span>
              <div className="optionCounter">
                <button
                  disabled={options.people <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("people", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.people}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("people", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="headerSearchItem">
        <div
          className={`minMaxFilter ${!filterPage ? "minMaxFilterPage" : ""}`}
        >
          <span className="lsOptionText">Min:</span>
          <input
            type="number"
            onChange={(e) => setMin(e.target.value)}
            className="lsOptionInput"
          />
        </div>
        <div
          className={`minMaxFilter ${!filterPage ? "minMaxFilterPage" : ""}`}
        >
          <span className="lsOptionText">Max:</span>
          <input
            type="number"
              onChange={(e) => setmax(e.target.value)}
            className="lsOptionInput"
          />
        </div>
      </div>
      <div className="headerSearchItem">
        <button className="headerBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
