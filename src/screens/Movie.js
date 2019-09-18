import React from 'react';
import {ScrollView,View, Image, Text, StyleSheet} from 'react-native';

import {SET_URI_THUMBNAIL} from '../constants/TMDB'

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
        const movie = this.props.navigation.getParam('movie')

        return(
            <ScrollView>
                <Image style={styles.MovieImage} source={{uri: SET_URI_THUMBNAIL(movie.poster_path) }}/>
                <View>
                    <Text style={styles.MovieTitle}>{movie.title}</Text>
                </View>
                <View>
                    <Text style={styles.MovieOverviewTitle}>Overview</Text>
                    <Text style={styles.MovieOverview}>{movie.overview}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.MovieInfo}>Rating:</Text>
                    <Text style={styles.MovieInfoText}>{movie.vote_average}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.MovieInfo}>Release:</Text>
                    <Text style={styles.MovieInfoText}>{movie.release_date}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    MovieImage: {
        justifyContent: 'center',
        alignItems: 'center', 
        height: 250,
        margin: 10,
        borderRadius: 10
    },
    MovieTitle:{
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30
    },
    MovieOverviewTitle:{
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    MovieOverview:{
        margin: 10,
        fontSize: 14,
        textAlign:"left",
        color: '#666'
    },
    MovieInfo:{
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    MovieInfoText:{
        marginLeft: 10,
        fontSize: 16,
        color: '#555'
    }
})