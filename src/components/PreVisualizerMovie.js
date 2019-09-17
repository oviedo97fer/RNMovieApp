import React, {useState, useEffect} from 'react';
import { 
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
 } from 'react-native';
//paths TMDB
import {POSTER_PATH} from '../constants/TMDB'

//assets
 import { Icon } from 'react-native-elements'

const PreVisualizerMovie = props =>{

    const [movieData, setMovieData] = useState([])

    useEffect(()=>{
      const sliceMovies = props.movies
      setMovieData(sliceMovies)
  },)

    const SET_URI_THUMBNAIL = posterpath=>(`${POSTER_PATH}${posterpath}`)
    return(
            <View style={styles.PreVisualizerMovie}>
                <View style={styles.TitleContainer}>
                  <Text style={styles.Title}>{props.title}</Text>
                  <TouchableOpacity style={styles.ChevronContainer} onPress={()=>{props.navigation.navigate(props.linkTo)}}>
                    <Icon 
                    style={styles.Chevron} 
                    name='chevron-right' 
                    type='material-community'
                    />
                  </TouchableOpacity>
                </View>
                 <View style={styles.MainContainer}>
                    <FlatList
                    data={movieData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>{props.navigation.navigate('Movie')}} style={{ flex: 1, flexDirection: 'column', margin: 5}}>
                            <Image style={styles.imageThumbnail} source={{ uri: SET_URI_THUMBNAIL(item.poster_path)}}/>
                        </TouchableOpacity>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        )
    }

export default PreVisualizerMovie

const styles = StyleSheet.create({
    PreVisualizerMovie:{ 
    },
    TitleContainer:{
      flexDirection: "row",
      alignItems:'center',
      justifyContent: 'space-between',
      height: 50,
    },
        Title:{
            fontSize: 18,
            fontWeight:'bold',
            marginTop: 10,
            marginLeft:10,
            color: '#777',
        },
        ChevronContainer:{
          padding: 20,
          marginRight:10,
           
        },

    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 10,
    },
      
        imageThumbnail: {
          justifyContent: 'center',
          alignItems: 'center', 
          height: 110,
          borderRadius: 15
        },      
})