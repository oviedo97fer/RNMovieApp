import { combineReducers } from 'redux';
import { popularMovies, upcomingMovies, moviesHasErrored, moviesIsLoading } from './movies'

export default combineReducers({
    popularMovies,
    upcomingMovies,
    moviesHasErrored,
    moviesIsLoading
});