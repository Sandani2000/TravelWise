import VehicleProviders from "../../components/vehicleProviders/VehicleProviders";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./vehicleHome.css";
import SearchBar from "../../components/searchBar/SearchBar";

const VehicleHome = () => {
  return (
    <div>
      <Navbar />
      <Header activePage={"travel"} />
      <SearchBar filterPage={false} />
      <div className="homeContainer">
        <VehicleProviders />
        <Footer />
      </div>
    </div>
  );
};

export default VehicleHome;
