import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainFeed from "./screens/MainFeed";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SingleNews from "./screens/SingleNews";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={MainFeed} />
        <Stack.Screen name="SingleNews" component={SingleNews} />
      </Stack.Navigator>
    }</NavigationContainer>
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
