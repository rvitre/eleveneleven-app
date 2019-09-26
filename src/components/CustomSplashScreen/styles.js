import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        position: 'relative'
    },
    loadingContainer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    loadingText: {
        color: "white",
        fontSize: 16
    }
});
