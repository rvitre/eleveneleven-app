import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '#8ecafd',
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
        height: 45,
        flexDirection: "row",
        zIndex: 2,
    },
    iconRight: {
        height: '100%',
        width: '100%',
        resizeMode: "contain",
        //tintColor: "$theBlue",
    },
    iconLeft: {
        height: '100%',
        width: '100%',
        resizeMode: "contain",
        //tintColor: "$theBlue",
    },
    logoIcon: {
        height: '100%',
        width: '100%',
        //tintColor: "$theBlue",
    },
    buttonRight: {
        height: 45,
        width: 45,
        padding: 12
    },
    buttonLeft: {
        height: 45,
        width: 45,
        padding: 12
    },
    logoButton: {
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
        flex: 1,
        marginTop: 2
    }
});
export default styles;