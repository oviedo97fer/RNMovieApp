import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
//Screens
import FeedScreen from '../screens/Feed'
import Movie from '../screens/Movie'
import MostRecommend from '../screens/MostRecommend'


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


export default FeedNavigator;