import {fetchUpcomingTMDBSuccess} from './actions'
import {moviesIsLoading} from './actions'
import {moviesHasErrored} from './actions'

export const UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=b6fc688cd4de953bb732d2c1acc3ab66&language=en-US&page=1'


export function fetchUpcomingTMDB(){
    return dispatch => {
        dispatch(moviesIsLoading(true));

        fetch(UPCOMING_URL)
        .then(res => res.json())
        .then(res => {
            dispatch(moviesIsLoading(false));
            dispatch(fetchUpcomingTMDBSuccess(res.results.slice(0,6)));           
        })
        .catch(() => {
            dispatch(dispatch(moviesHasErrored(true))); 
        })
    }
}