import {fetchSearchMoviesSuccess} from './actions'
import { API_KEY } from '../constants/API_KEY'


export const SEARCH_URL = (query) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`


export const fetchSearchMovies = (search)=>{
    return dispatch => {
        fetch(SEARCH_URL(search))
        .then(res => res.json())
        .then(res => {
            console.log(res.results)
            console.log(search)
            dispatch(fetchSearchMoviesSuccess(res.results));           
        })
    }
}
