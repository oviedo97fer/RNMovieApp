import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {connect} from 'react-redux'

//comps
import Searcher from '../components/Searcher'
import ResultSearch from '../components/ResultSearch'

class Search extends React.Component{
    
    render(){
        console.log(this.props.query)
        return(
            <View>
                <Searcher/>
                <ScrollView style={{marginBottom: 60}}>
                    {this.props.query.map(movie=>(
                        <ResultSearch data={movie} key={movie.id} navigation={this.props.navigation}/>
                        //TODO: al momento de hacer click en el resultado, guardar en busquedas recientes con el action savedRecentlySearched()
                        ))}
                </ScrollView>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    query: state.queryMoviesResults
})
const mapDispatchToProps = dispatch=>(
    {
    //savedRecentlySearched
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Search)