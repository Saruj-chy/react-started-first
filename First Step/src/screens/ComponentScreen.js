import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {

  // const text = "Hi there! also";
  const greeting = <Text >Hi there! also</Text>;

  return (
    <View>
      <Text style={styles.text}>This is the component screen </Text>
      {/* <Text>{text} </Text> */}
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentScreen;