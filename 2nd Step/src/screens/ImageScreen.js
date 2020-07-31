import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ImageDetail from '../components/ImageDetail'
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreen = () => {
  return (
    <ScrollView>
      <View>
        <ImageDetail title="Mountain" ImageSource={require('../../assets/beach.jpg')} score={9} />
        <ImageDetail title="Beach" ImageSource={require('../../assets/forest.jpg')} score={7} />
        <ImageDetail title="Forest" ImageSource={require('../../assets/mountain.jpg')} score={10} />
        <ImageDetail title="Monkey" ImageSource={require('../../assets/beach.jpg')} score={9} />
      </View>
    </ScrollView>
  )
}



export default ImageScreen;