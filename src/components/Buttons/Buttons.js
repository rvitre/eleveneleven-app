import React from 'react';
import { TouchableOpacity, Text, TouchableHighlight } from 'react-native';

import styles from './ButtonsStyles';

function PrimaryButton({ onPress, text }) {
  // Declare a new state variable, which we'll call "count"

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
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