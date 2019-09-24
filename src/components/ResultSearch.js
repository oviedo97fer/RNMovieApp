import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native'

import {SET_URI_THUMBNAIL} from '../constants/TMDB'


const ResultSearch = ({data, navigation}) =>{
    console.log(title)
    const {title, poster_path} = data
    return(
        <TouchableOpacity 
            style={styles.resultSearchContainer} 
            onPress={()=>{navigation.navigate('Movie', {movie: data})}}>
            <Image style={styles.thumbnailImg} source={{uri: SET_URI_THUMBNAIL(poster_path)}}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    resultSearchContainer:{
        margin: 6,
        padding: 10,
        //borderColor: 'red',
        //borderWidth:1,
        borderRadius: 10,
        flexDirection: 'row',
    },
    thumbnailImg:{
        width: 60, 
        height:60,
        borderRadius: 5
    },
    title:{
        //borderColor: 'green',
        //borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        fontWeight:'bold',
        fontSize: 20
    }
})
export default ResultSearch