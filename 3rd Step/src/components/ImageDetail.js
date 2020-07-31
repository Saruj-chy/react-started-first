import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// const ImageDetail = (props) => {
//   return <View>
//     <Image source={props.ImageSource} />
//     <Text>{props.title} in Jangle</Text>
//     <Text>Score for Image - {props.score}</Text>

//   </View>
// }

//without props
const ImageDetail = ({ ImageSource, title, score }) => {
  return <View>
    <Image source={ImageSource} />
    <Text>{title} in Jangle</Text>
    <Text>Score for Image - {score}</Text>

  </View>
}



export default ImageDetail;