import { StyleSheet, StatusBar } from 'react-native';
import { hasNotch } from '../../utils/hasNotch';

export default StyleSheet.create({
    topLogo: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : (hasNotch ? 40 : 0),
    },
    image: {
        marginLeft: 8, 
        width: 50, 
        height: 50, 
        resizeMode: 'contain'
    }
});
