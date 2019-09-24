import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux'

import Searcher from '../components/Searcher'

class Search extends React.Component{
    
    render(){
        return(
            <View>
                <Searcher/>
            </View>
        )
    }
}
const mapStateToProps = state=>({
    //query: state.handleSearchChange
})
const mapDispatchToProps = dispatch=>(
    {

    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Search)