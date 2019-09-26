import makeModule from "./reduxBoilerplateHelper";

const initialState = {
  token: {},
  userInfo: {},
  alreadyLoggedOnce: false,
  loading: false
};

const handlers = {
  setInfoAfterLogout(state, infos) {
    return { ...state, ...infos };
  }
};

const handlersAsync = {};

const { reducer, actions } = makeModule(
  "login",
  initialState,
  handlers,
  handlersAsync
);

export default reducer;
export { actions };
