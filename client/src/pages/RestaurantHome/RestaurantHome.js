import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import RestaurantProviders from "../../components/restaurantProviders/RestaurantProviders.js";

const RestaurantHome = () => {
    return (
      <div>
        <Navbar />
        <Header activePage={"restaurant"} />
        {/* <SearchBar filterPage={false} /> */}
        <div className="homeContainer">
          <RestaurantProviders />
          <Footer />
        </div>
      </div>
    );
  };

  export default RestaurantHome;