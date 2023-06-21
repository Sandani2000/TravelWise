import axios from "axios";

export const fetchFilterdVehicleData = async (
  selectedCountry,
  selectedCity,
  min,
  max
) => {
  try {
    const vehicleList = await axios.get(
      `/api/vehicles?location=${selectedCountry}&city=${selectedCity}&min=${
        min || 0
      }&max=${max || 999}`
    );

    if (vehicleList?.data) {
      return vehicleList.data;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log(error);
  }
};
