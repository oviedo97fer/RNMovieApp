import React from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'

import Searcher from '../components/Searcher'

class Search extends React.Component{
    
    render(){
        console.log(this.props.query)
        return(
            <View>
                <Searcher/>
                <View>
                    {this.props.query.map(i=>(<Text>{i.title}</Text>))}
                </View>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    query: state.queryMoviesResults
})
const mapDispatchToProps = dispatch=>(
    {

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Search)