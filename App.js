import React, {Fragment} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//screens
import Feed from './src/screens/Feed';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';

const TabAppNavigator = createBottomTabNavigator({
  Feed,
  Search,
  Profile
})


export default createAppContainer(TabAppNavigator);
