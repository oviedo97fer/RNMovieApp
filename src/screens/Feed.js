import React from 'react';
import {ScrollView,View, Button, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

//components
import PreVisualizerMovie from '../components/PreVisualizerMovie';
//Screens
import Movie from './Movie'
import MostRecommend from './MostRecommend'

class FeedScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            mostRecommended: [],
            upcomingMovies: [],
            mostRecommendedList: []
        }
    }

    static navigationOptions = {
        title: 'Feed',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            left: 10,
          },
      };

    componentDidMount(){
        const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=b6fc688cd4de953bb732d2c1acc3ab66&language=en-US&page=1'
        const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b6fc688cd4de953bb732d2c1acc3ab66&language=en-US&page=1'
        fetch(POPULAR_URL)
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    mostRecommended: data.results.slice(0,6),
                    mostRecommendedList: data.results
                })
            })
        fetch(UPCOMING_URL)
            .then(res=> res.json())
            .then(data=>{
                this.setState({
                    ...this.state,
                    upcomingMovies: data.results.slice(0,6)
                })
            })
    }
    render(){
        return(
            <ScrollView>
                <PreVisualizerMovie 
                    navigation={this.props.navigation} 
                    title='Most Recommended' 
                    linkTo='MostRecommend' 
                    movies={this.state.mostRecommended}
                    listMovies={this.state.mostRecommendedList}
                    />
                {console.log(this.state.mostRecommended)}
                <PreVisualizerMovie 
                    navigation={this.props.navigation} 
                    title='Upcoming Movies' 
                    linkTo='UpcomingMovies'
                    movies={this.state.upcomingMovies}
                    listMovies={this.state.mostRecommendedList}/>
            </ScrollView>
        )
    }
} 


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

export default FeedNavigator
