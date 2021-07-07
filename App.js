import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {
  CategoriesNewsStackScreen,
  SearchNewsStackScreen,
  TrendingNewsStackScreen
} from "./app/navigators/StackNavigators";
import {StyleSheet} from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>{
        <Tab.Navigator tabBarOptions={{style: styles.tabNavigator}}>
          <Tab.Screen name="TrendingNews" component={TrendingNewsStackScreen} />
          <Tab.Screen name="CategoriesNews" component={CategoriesNewsStackScreen} />
          <Tab.Screen name="SearchNews" component={SearchNewsStackScreen} />
        </Tab.Navigator>
      }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    paddingTop: 20,
  },
});