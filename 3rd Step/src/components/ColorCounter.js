import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

//eta add kora hoiche, screens/squareScreen er sathe
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text> {color} </Text>
      <Button title={`Increase ${color} `} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color} `} onPress={() => onDecrease()} />
    </View>

  )
}

export default ColorCounter;