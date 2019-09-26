export const navStates = {
  currentRoute: {},
}

export const navReducer = (state, action) => {
  switch (action.type) {
      case "SET_CURRENT_ROUTE":
        return {
          ...state,
          currentRoute: action.data
        };
    default:
      return state;
  }
};