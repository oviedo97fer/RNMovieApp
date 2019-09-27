import React from 'react';
import {ScrollView,StatusBar, StyleSheet} from 'react-native';
//redux
import {connect} from 'react-redux';
import { fetchPopularTMDB} from '../actions/fetchPopularTMDB';
import {fetchUpcomingTMDB} from '../actions/fetchUpcomingTMDB';

//components
import PreVisualizerMovie from '../components/PreVisualizerMovie';
import DrawerMenuBtn from '../contain/DrawerMenuBtn';

class FeedScreen extends React.Component{
    static navigationOptions = ({navigation})=>{
        return {
        title: 'Feed',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            left: 10,
          },
        headerRight:(
            <DrawerMenuBtn
                onPress={()=>navigation.toggleDrawer()}
            />
        )
      };
    };
    
    componentDidMount(){
        this.props.fetchPopularMovies(); 
        this.props.fetchUpcomingMovies();
    }
    render(){
        return(
            <ScrollView>
                <StatusBar barStyle="light-content" backgroundColor="#6271ef" />
                <PreVisualizerMovie 
                    navigation={this.props.navigation} 
                    title='Most Recommended' 
                    linkTo='MostRecommend' 
                    movies={this.props.popularMovies}
                    />
                <PreVisualizerMovie 
                    navigation={this.props.navigation} 
                    title='Upcoming Movies' 
                    linkTo='UpcomingMovies'
                    movies={this.props.upcomingMovies}
                    />
            </ScrollView>
        )
    }
} 
//Redux
const mapStateToProps = state => ({
    popularMovies: state.popularMovies,
    upcomingMovies: state.upcomingMovies,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading
})

const mapDispatchToProps = (dispatch) => {
return {
    fetchPopularMovies: () => dispatch(fetchPopularTMDB()),
    fetchUpcomingMovies: () => dispatch(fetchUpcomingTMDB())}
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedScreen);


