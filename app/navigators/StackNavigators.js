import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import TrendingNewsFeed from "../screens/TrendingNewsFeed";
import SingleNews from "../screens/SingleNews";
import SearchNewsFeed from "../screens/SearchFeed";
import CategoriesFeed from "../screens/CategoriesFeed";

const TrendingNewsStack = createStackNavigator();
export function TrendingNewsStackScreen() {
    return (
        <TrendingNewsStack.Navigator>
            <TrendingNewsStack.Screen name="TrendingNewsFeed" component={TrendingNewsFeed} />
            <TrendingNewsStack.Screen name="SingleNews" component={SingleNews} />
        </TrendingNewsStack.Navigator>
    );
}

const CategoriesNewsStack = createStackNavigator();
export function CategoriesNewsStackScreen() {
    return (
        <CategoriesNewsStack.Navigator>
            <CategoriesNewsStack.Screen name="CategoriesNewsFeed" component={CategoriesFeed} />
            <CategoriesNewsStack.Screen name="SingleNews" component={SingleNews} />
        </CategoriesNewsStack.Navigator>
    );
}

const SearchNewsStack = createStackNavigator();
export function SearchNewsStackScreen() {
    return (
        <SearchNewsStack.Navigator>
            <SearchNewsStack.Screen name="SearchNewsFeed" component={SearchNewsFeed} />
            <SearchNewsStack.Screen name="SingleNews" component={SingleNews} />
        </SearchNewsStack.Navigator>
    );
}