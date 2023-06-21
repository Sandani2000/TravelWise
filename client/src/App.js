import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleList from "./pages/VehicleList/VehicleList";
import VehicleHome from "./pages/VehicleHome/VehicleHome";
import Vehicle from "./pages/vehicle/Vehicle";
import AddVehicle from "./pages/addVehicle/AddVehicle";
import ChangeVehicle from "./pages/changeVehicle/ChangeVehicle";

//restaurant
import HomeRestaurant from "./components/Home_Restaurant/Home_Restaurant";
import AddRestaurant from "./components/AddRestaurant/AddRestaurant";
import EditRestaurant from "./components/EditRestaurant/EditRestaurant";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";
import RestaurantHome from "./pages/RestaurantHome/RestaurantHome.js";

//hotel
import HotelHome from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import AddHotel from "./pages/addHotel/AddHotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //travel
        <Route path="/" element={<VehicleHome />} />
        <Route path="/vehicleList" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
        <Route path="/changeVehicle" element={<ChangeVehicle />} />
        //hotel
        <Route path="/hotelhome" element={<HotelHome />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/addHotel" element={<AddHotel />} />
        //reastaurant
        <Route path="/RestaurantHome" element={<RestaurantHome />} />
        <Route path="/homeRestaurant" element={<HomeRestaurant />} />
        <Route path="/add" element={<AddRestaurant />} />
        <Route path="/edit/:id" element={<EditRestaurant />} />
        <Route path="/post/:id" element={<RestaurantDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
