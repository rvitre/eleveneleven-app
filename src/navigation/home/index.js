import Home from "../../containers/Home/Home";
import { headerLightStyle, headerDarkStyle } from "../styles";

import { MAIN } from "./navigationPaths";

export default {
    [MAIN]: {
        screen: Home,
        //navigationOptions: headerLightStyle({ withoutBackButton: true })
        navigationOptions: {
            header: null
        }
    }
};
