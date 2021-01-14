import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Init project</Text>
      <Image
        style={styles.img}
        source={{
          uri: 'https://media.wired.com/photos/5e1e646743940d0008009167/1:1/w_1533,h_1533,c_limit/Science_Cats-84873657.jpg',
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
});
