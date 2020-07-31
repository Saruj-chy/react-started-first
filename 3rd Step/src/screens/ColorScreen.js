import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

//=======  ei js diye ami different color ante pari, jekono time e, jokonoi click korbo..
const ColorScreen = () => {
  return (
    <View>
      <Button
        title="Add a Color"
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: randomRGB() }}

      />
    </View>
  )
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb( ${red}, ${green}, ${blue} )`;
}


const styles = StyleSheet.create({

})



export default ColorScreen; 