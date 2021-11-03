import { ADD_MOVIES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMoviesState, action){
    if(action.type === ADD_MOVIES){
        console.log("check")
        return {
            ...state,
            list: action.movies
        };
    }
    return state;
}