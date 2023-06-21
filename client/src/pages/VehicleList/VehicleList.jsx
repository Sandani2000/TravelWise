import "./vehicleList.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import { fetchFilterdVehicleData } from "../../useEffects/fetchFilterdVehicleData";

const VehicleList = () => {
  const location = useLocation();
  const [selectedCountry] = useState(location.state.selectedCountry);
  const [selectedCity] = useState(location.state.selectedCity);
  const [min] = useState(undefined);
  const [max] = useState(undefined);
  const [vehicleDataList, setVehicleDataList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetchFilterdVehicleData(
      selectedCountry,
      selectedCity,
      min,
      max
    );
    setVehicleDataList(result);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" activePage="travel" />
      <SearchBar
        setVehicleDataList={setVehicleDataList}
        selectedCountryData={selectedCountry}
        selectedCityData={selectedCity}
        filterPage={true}
      />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {vehicleDataList &&
              vehicleDataList.length > 0 &&
              vehicleDataList.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleList;
