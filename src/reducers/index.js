import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMoviesState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            };
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            };
        case REMOVE_FROM_FAVOURITES:
            // const index = state.favourites.indexOf(action.movie);
            // console.log(index);
            state.favourites = state.favourites.filter(function(movie){
                return movie !== action.movie
            });
            return {
                ...state,
                favourites: [...state.favourites]
            };
        default:
            return state;
    }
}