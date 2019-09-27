import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
//Screens
import FeedScreen from '../screens/Feed'
import Movie from '../screens/Movie'
import MostRecommend from '../screens/MostRecommend'
//Drawer Screens
import Settings from '../screens/Settings'

//Stack Navigator
const FeedNavigator = createStackNavigator(
    {
      FeedScreen,
      Movie,
      MostRecommend
    },
    {
        defaultNavigationOptions:{
                headerStyle: {
                    backgroundColor: '#6271ef',
                    height: 80,
                },
                headerTintColor: '#fff',
                },
               
        } 
  )
//Drawer Navigator Feed

const FeedDrawer = createDrawerNavigator({
  Feed: {
    screen: FeedNavigator,
    navigationOptions:{
      drawerLabel: 'Feed'
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions:{
      drawerLabel:'Settings'
    }
  }
})


export default FeedDrawer;