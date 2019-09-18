import {fetchPopularTMDBSuccess} from './actions'
import {moviesIsLoading} from './actions'
import {moviesHasErrored} from './actions'

export const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=b6fc688cd4de953bb732d2c1acc3ab66&language=en-US&page=1'


export function fetchPopularTMDB(){
    return dispatch => {
        dispatch(moviesIsLoading(true));

        fetch(POPULAR_URL)
        .then(res => res.json())
        .then(res => {
            dispatch(moviesIsLoading(false));
            dispatch(fetchPopularTMDBSuccess(res.results.slice(0,6)));           
        })
        .catch(() => {
            dispatch(dispatch(moviesHasErrored(true))); 
        })
    }
}
