export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const MOVIES_HAS_ERRORED = 'MOVIES_HAS_ERRORED';
export const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING'
export const FETCH_UPCOMING_MOVIES_SUCCESS = 'FETCH_UPCOMING_MOVIES_SUCCESS';

export function fetchPopularTMDBSuccess(popularMovies) {
    return {
        type: FETCH_POPULAR_MOVIES_SUCCESS,
        popularMovies
    }
}
export function fetchUpcomingTMDBSuccess(upcomingMovies){
    return{
        type: FETCH_UPCOMING_MOVIES_SUCCESS,
        upcomingMovies
    }
}

export function moviesHasErrored(bool) {
    return {
        type: MOVIES_HAS_ERRORED,
        hasErrored: bool
    };
}
export function moviesIsLoading(bool) {
    return {
    type: MOVIES_IS_LOADING,
        isLoading: bool
    };
}
