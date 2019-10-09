import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { hasNotch } from '../../utils/hasNotch'; 

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backgroundImage: {
        resizeMode: 'cover',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column',
    },
    loadingText: {
        color: 'white'
    }
});