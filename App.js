import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from "./src/screens/Home";
import mainpage from "./src/screens/mainpage";
import details from './src/screens/details';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the app</Text>
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
});
