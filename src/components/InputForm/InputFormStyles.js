import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  inputFormContainer: {
    width: '100%',
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    flexDirection: 'row'
  },
  iconContainer: {
    width: 30
  },
  inputForm: {
    flex: 1
  }
});