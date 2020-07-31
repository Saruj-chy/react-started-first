import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

// const HomeScreen = (props) => {

//   console.log(props.navigation);

//   return (
//     <View>
//       <Text style={styles.text}>HomeScreen</Text>
//       <Button
//         title="Go to Components Demo"
//         color="red"
//         onPress={() => props.navigation.navigate('Components')}
//       />
//       <TouchableOpacity
//         onPress={() => props.navigation.navigate('List')}
//       >
//         <Text style={styles.text}>Go to List Demos</Text>

//       </TouchableOpacity>
//     </View>
//   );

// };

const HomeScreen = ({ navigation }) => {

  console.log(navigation);

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        color="red"
        onPress={() => navigation.navigate('Components')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.text}>Go to List Demos</Text>

      </TouchableOpacity>

      <Button
        title="Go to ImageScreen Demo"
        color="red"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to Counter Screen Demo"
        color="red"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Go to Color Screen Demo"
        color="blue"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Multi Color Screen Demo"
        color="red"
        onPress={() => navigation.navigate('MultiColor')}
      />

      <Button
        title="Go to Multi Color Flat List Screen Demo"
        color="red"
        onPress={() => navigation.navigate('MultiColorFlat')}
      />

      <Button
        title="Go to SquareScreen Demo"
        color="blue"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
