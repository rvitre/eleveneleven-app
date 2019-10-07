import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSlider: {
        flex: 1,
    },
    slider: {
        backgroundColor: 'white'
    },
    bottomButtonsContainer: {
        flex: -1, 
        flexDirection: 'row', 
        width: '100%',
        marginBottom: Platform.OS === "android" ? 0 : 50,
    },
    bottomButton: {
        borderColor: 'white', 
        flex:1, 
        borderWidth: 4
    },
    bottomButtonView: {
        backgroundColor: 'black', 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    bottomButtonText: {
        color: 'white', 
        fontSize: 16
    }
});