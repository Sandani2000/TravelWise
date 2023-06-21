import { createContext } from "react";

const INITIAL_STATE = {
  location: undefined,
  dates: [],
  options: {
    people: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE; 
      default:
        return state;
  }
};

// export const SearchContextProvider = ({ people }) => {
//   const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

//   return (
//     <SearchContext.Provider
//       value={{
//         location: state.location,
//         dates: state.dates,
//         options: state.options,
//         dispatch,
//       }}
//     >
//       {people}
//     </SearchContext.Provider>
//   );
// };
