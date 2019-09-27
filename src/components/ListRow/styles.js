import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 1,
        backgroundColor: '#FFF',
        elevation: 4,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        //justifyContent: 'center',
        paddingTop: 8,
        paddingRight: 15,
        paddingBottom: 15,
    },
    date: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 100,
        width: 100,
    },
    categories: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 6
    },
    category: {
        paddingRight: 6
    }
});
