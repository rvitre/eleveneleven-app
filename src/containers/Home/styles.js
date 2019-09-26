import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles = EStyleSheet.create({
    cyberWebview: {
        '@media ios': {
            marginTop: '$headerHeight'
        },
        '@media android': {
            marginTop: () => StatusBar.currentHeight + EStyleSheet.value('$headerHeight')
        }        
    },
    headerlessWebview: {
        '@media android': {
            marginTop: StatusBar.currentHeight
        }  
    } 
});
export default styles;