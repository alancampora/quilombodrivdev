import {
    ADD_POST,
    FETCH_POSTS,
    FETCH_POSTS_FAIL,
    FETCH_POSTS_SUCCESS
} from '../constants/ActionTypes';
import initialState from './initialState'

//nice
export default function posts(state = initialState, action) {
    console.log('POSTS REDUCER', initialState, action)
    
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            /*
             *When we are loading cats from the API, we want to completely overwrite the 
             *previous cat collection from our state with the new cat collection from our 
             *API.So no need to create any object copies here
             */
            console.log('FETCH_POSTS_SUCCESS', action)
            return action.posts
        default:
            return state;
    }
}


