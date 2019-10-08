import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { hasNotch } from '../../utils/hasNotch';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        resizeMode: 'cover',
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column',
    },
    bottomButtonsContainer: {
        width: '100%',
    },
    bottomButton: {
        //flex:1, 
        width: '90%',
        marginBottom: 15,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    bottomButtonView: {
        
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    bottomButtonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold'
    },
    topLogo: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : (hasNotch ? 40 : 0),
        zIndex: 50,
        elevation: 5
    }
});