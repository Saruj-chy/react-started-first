import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {

  const CountryNames = [
    { name: '#Bangladesh', age: 20 },
    { name: '#India', age: 22 },
    { name: '#America', age: 25 },
    { name: '#Africa', age: 28 },
    { name: '#Srilanka', age: 32 },
    { name: '#ABSDLL', age: 36 },
    { name: '#Canada', age: 40 },
    { name: '#AJDJDJJD', age: 45 },
    { name: '#KJSASJD', age: 50 },
  ]

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={CountryName => CountryName.name}
      data={CountryNames}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>{item.name} , Age: {item.age}</Text>
          </View>
        );
      }
      }
    />
  )

}

const styles = StyleSheet.create({

  textStyle: {
    backgroundColor: 'green',
    padding: 10,
    color: 'red',
    margin: 5,
    textAlign: 'center',
    fontSize: 20,

  }

});

export default ListScreen;


