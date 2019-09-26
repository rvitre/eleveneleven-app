import VPN from "../../containers/VPN/VPN";
import ServerList from "../../containers/VPN/ServerList";

import { headerLightStyle } from "../styles";
import {
  HOME, SERVER_LIST
} from "./navigationPaths";

export default {
  [HOME]: {
    screen: VPN,
    //navigationOptions: headerLightStyle({ withoutBackButton: true })
    navigationOptions: {
      header: null
    }
  },
  [SERVER_LIST]: {
    screen: ServerList,
    //navigationOptions: headerLightStyle({ withoutBackButton: true })
    navigationOptions: {
      header: null
    }
  }
};
