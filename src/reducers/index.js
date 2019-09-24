import { combineReducers } from 'redux';
import { popularMovies, upcomingMovies, moviesHasErrored, moviesIsLoading ,handleSearchChange} from './movies'

export default combineReducers({
    popularMovies,
    upcomingMovies,
    moviesHasErrored,
    moviesIsLoading,
    handleSearchChange
});