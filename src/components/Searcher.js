import React,{useEffect} from 'react';
import { SearchBar } from 'react-native-elements';

import {connect} from 'react-redux';
import {fetchSearchMovies} from '../actions/fetchSearchMovies'
import { handleSearchChange } from '../actions/actions';

const Searcher = ({handleSearchChange, search,fetchSearchMovies}) =>{
    const updateSearch = searchChange => {
        handleSearchChange(searchChange)
    }
    useEffect(() => {
        fetchSearchMovies(search)
    }, [search]);
    return(
        <SearchBar
            placeholder='Search movie..'
            onChangeText={updateSearch}   
            value={search}  
            lightTheme={true}
        />
    )
}

const mapStateToProps = state => ({
    search: state.handleSearchChange
})
const mapDispatchToProps = {
    handleSearchChange,
    fetchSearchMovies}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher)

/* const mapStateToProps = state => ({
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

export default connect(mapStateToProps,mapDispatchToProps)(FeedScreen); */