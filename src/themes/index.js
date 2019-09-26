import { useContext } from "react";
import { StoreContext } from "../context/store/storeContext";
import ApplicationStyles from "./ApplicationStyles";

/**
 * getRemoteTheme - gives access to remotely fetched CSS properties (branding style)
 * Hook based, to be used inside a hook component
 */
const getRemoteTheme = () => {
  const { state, actions } = useContext(StoreContext);
  return state.themeStates.theme;
};

export { ApplicationStyles, getRemoteTheme };
