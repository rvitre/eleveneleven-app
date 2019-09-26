import React from 'react';
import {View, Text} from 'react-native';

import styles from './SignicatLoginStyles';


import {PrimaryButton } from '../../../components/Buttons/Buttons';

export default function SignicatLogin() {
    return <View style={styles.signicatLoginContainer}>
        <PrimaryButton onPress={() => console.log("open bankid")} text="Login"/>
    </View>
};