import React, { useState } from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {

    //color = 'red', green, blue
    //change=  15, -15

    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }


  }

  console.log("red", red)
  console.log("green", green)
  console.log("blue", blue)
  return (
    <View>
      <ColorCounter
        // onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />

      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />

      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>

  )
}

// const SquareScreen = () => {

//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   console.log(red)
//   return (
//     <View>
//       <ColorCounter
//         onIncrease={() => setRed(red + COLOR_INCREMENT)}
//         onDecrease={() => setRed(red - COLOR_INCREMENT)}
//         color="Red"
//       />

//       <ColorCounter
//         onIncrease={() => setGreen(green + COLOR_INCREMENT)}
//         onDecrease={() => setGreen(green - COLOR_INCREMENT)}
//         color="Blue"
//       />

//       <ColorCounter
//         onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
//         onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
//         color="Green"
//       />

//       <View
//         style={{
//           height: 150,
//           width: 150,
//           backgroundColor: `rgb(${red}, ${green}, ${blue})`
//         }}
//       />
//     </View>

//   )
// }

export default SquareScreen;