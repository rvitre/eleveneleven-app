export const themeStates = {
  color: "yellow",
  theme: {},
}

export const themeReducer = (state, action) => {
  switch (action.type) {
      case "SET_COLOR":
        return {
          ...state,
          color: action.data
        };
      case "SET_THEME":
        return {
          ...state,
          theme: action.data
        };
    default:
      return state;
  }
};