import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CounterScreen = () => {

  // let counter = 0;
  const [counter, setcounter] = useState(0);


  return (
    <View>
      <Button title="Increase" onPress={() => {
        // counter++;
        // console.log(counter);
        setcounter(counter + 1);
      }} />
      <Button title="Decrease" onPress={() => {
        // counter--;
        setcounter(counter - 1);
      }} />
      <Text>Counter Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // text: {
  //   fontSize: 30
  // }
});

export default CounterScreen;