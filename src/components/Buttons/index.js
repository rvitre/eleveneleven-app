import React from 'react';
import { TouchableOpacity, Text, TouchableHighlight, View } from 'react-native';

import styles from './ButtonsStyles';

function PrimaryButton({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.buttonView}>
          <Text style={styles.buttonText}>{text}</Text>
      </View>
  </TouchableOpacity>
  );
}

function SecondaryButton({ onPress, text }) {
  // Declare a new state variable, which we'll call "count"

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerSec}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

function LinkButton({ onPress, text }) {
  // Declare a new state variable, which we'll call "count"

  return (
    <TouchableHighlight onPress={onPress} style={styles.linkContainer}>
      <Text>{text}</Text>
    </TouchableHighlight>
  );
}

export { PrimaryButton, LinkButton, SecondaryButton };