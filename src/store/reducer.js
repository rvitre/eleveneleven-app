import { combineReducers } from "redux";
import login from "./login";

// import settings from "./settings";
// import appState from "./appState";
// import modal from "./modal";

const appReducer = combineReducers({
//  appState,
  login,
//  settings,
//  modal,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  if (action.type === "CLEAR_CACHE") {
    let tmp = appReducer(undefined, action);
    tmp.login.alreadyLoggedOnce = state.login.alreadyLoggedOnce;
    tmp.appState.connected = state.appState.connected;

    console.log("STACK", tmp);
    state = tmp;
  }
  return appReducer(state, action);
};

export default rootReducer;
