import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  signicatLoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flex: 1
  }
});