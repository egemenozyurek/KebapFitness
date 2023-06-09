import React from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";

import styles from "./Input.style";

const Input = ({ label, onChangeText, placeholder }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </SafeAreaView>
  );
};

export default Input