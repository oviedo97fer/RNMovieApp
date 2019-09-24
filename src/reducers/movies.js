import {FETCH_POPULAR_MOVIES_SUCCESS,FETCH_UPCOMING_MOVIES_SUCCESS,MOVIES_HAS_ERRORED,MOVIES_IS_LOADING,HANDLE_SEARCH_CHANGE} from '../actions/actions';

export function moviesHasErrored(state = false, action) {
    switch (action.type) {
        case MOVIES_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export function moviesIsLoading(state = false, action) {
    switch (action.type) {
        case MOVIES_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function popularMovies(state = [], action) {
    switch (action.type) {
        case FETCH_POPULAR_MOVIES_SUCCESS:
            return action.popularMovies;
        default:
            return state;
    }
}

export function upcomingMovies(state = [],action){
    switch (action.type) {
        case FETCH_UPCOMING_MOVIES_SUCCESS:
            
            return action.upcomingMovies;
    
        default:
           return state
    }
}
export function handleSearchChange(state='',action){
    switch (action.type) {
        case HANDLE_SEARCH_CHANGE:
            return action.search    
        default:
            return state
    }
}