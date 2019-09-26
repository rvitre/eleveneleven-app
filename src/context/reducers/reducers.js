import { initialState } from "../state/initialStates";
import { themeReducer } from './themeReducer';
import { navReducer } from './navReducer';

const reducer = (state = initialState, action) => {
  return {
    themeStates: themeReducer(state.themeStates,action),
    navStates: navReducer(state.navStates,action),
  }
};

export { initialState, reducer };