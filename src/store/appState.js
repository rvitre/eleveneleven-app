import makeModule from "./reduxBoilerplateHelper";

const initialState = {
  connected: true,
  appState: "",
  timeBackground: "",
  lastTimeRenewed: "",
  intervalId: "",
  nextActionWhenLogged: "",
  trackInfoOfNextActionWhenLogged: {}
};

const handlers = {
  setNetwork(state, networkState) {
    return {
      ...state,
      connected: networkState
    };
  },
  setAppState(state, appState) {
    return {
      ...state,
      appState
    };
  },
  setTimeBackground(state, timeBackground) {
    return {
      ...state,
      timeBackground
    };
  },
  setLastTimeRenewed(state, lastTimeRenewed) {
    return {
      ...state,
      lastTimeRenewed
    };
  },
  setIntervalId(state, intervalId) {
    return {
      ...state,
      intervalId
    };
  },
  setNextActionWhenLogged(state, {action, payload}) {
    return {
      ...state,
      nextActionWhenLogged: action,
      trackInfoOfNextActionWhenLogged: payload
    };
  }
};

const handlersAsync = {};

const { reducer, actions } = makeModule(
  "appState",
  initialState,
  handlers,
  handlersAsync
);

export default reducer;
export { actions };
