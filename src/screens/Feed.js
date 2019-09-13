import React from 'react';
import {ScrollView,View, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

//components

//Screens
import Movie from './Movie';
import { createAppContainer } from 'react-navigation';

class FeedScreen extends React.Component{
    static navigationOptions = {
        title: 'Feed',
      };
    render(){
        return(
            <ScrollView>
                
            </ScrollView>
        )
    }
}
const FeedNavigator = createStackNavigator(
    {
      FeedScreen,
      Movie
    },
    {
        defaultNavigationOptions:{
                headerStyle: {
                    backgroundColor: '#6271ef',
                },
                headerTintColor: '#fff',
                }   
        } 
  )

export default FeedNavigator
