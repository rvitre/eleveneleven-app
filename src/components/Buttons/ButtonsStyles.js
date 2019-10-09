import { StyleSheet } from "react-native";
import { ApplicationStyles } from "../../themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  button: {
    //flex:1, 
    width: '90%',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  buttonView: {
      height: 40, 
      alignItems: 'center', 
      justifyContent: 'center'
  },
  buttonText: {
      color: 'white', 
      fontSize: 16,
      fontWeight: 'bold'
  },
});
