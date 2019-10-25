/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Platform } from "react-native"


  try {
    console = {}
    console.assert = () => {}
    console.info = () => {}
    console.log = () => {}
    console.warn = () => {}
    console.error = () => {}
    console.time = () => {}
    console.timeEnd = () => {}

    global.console = console
  } catch (err) {}


AppRegistry.registerComponent(appName, () => App);
