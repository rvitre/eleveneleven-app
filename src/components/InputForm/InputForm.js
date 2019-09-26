import React from "react";
import { View, TextInput } from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons';

import styles from "./InputFormStyles";

export default function InputForm({
  onChange,
  value,
  secureTextEntry = false,
  textContentType,
  icon,
  maxLenght = 40,
  placeholder
}) {
  return (
    <View style={styles.inputFormContainer}>
      {/*       {icon ? (
        <View style={styles.iconContainer}>
          <Icon name={icon} size={24} color="#000" />
        </View>
      ) : null} */}
      <TextInput
        style={styles.inputForm}
        onChangeText={onChange}
        value={value}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        maxLength={maxLenght}
        placeholder={placeholder}
      />
    </View>
  );
}
