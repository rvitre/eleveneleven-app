import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import styles from './styles';


const HeaderLeftTransparent = ({ navigation }) => (
    
    <TouchableOpacity  onPress={() => navigation.toggleDrawer()} style={styles.topLogo}>
        <Image source={require('../../assets/images/logo-11h11.png')} style={styles.image} />
    </TouchableOpacity>
);

export default HeaderLeftTransparent;