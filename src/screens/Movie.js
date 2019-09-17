import React from 'react';
import {ScrollView,View, Text} from 'react-native';



export default class Movie extends React.Component{
    static navigationOptions = {
        title: 'Movie',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            left: 80,
          },
      };
    render(){
        return(
            <ScrollView>
                <Text>Movie</Text>
            </ScrollView>
        )
    }
}