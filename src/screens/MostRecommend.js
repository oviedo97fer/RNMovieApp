import React from 'react'
import {View, Text} from 'react-native'

export default class MostRecommend extends React.Component{
    render(props){
        return(
            <View>
                <Text>{props.listMovies}</Text>
            </View>
        )
    }
}