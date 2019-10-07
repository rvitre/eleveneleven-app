import { StyleSheet } from 'react-native';

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
        flexDirection: 'row', 
        width: '100%',
    },
    bottomButton: {
        flex:1, 
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