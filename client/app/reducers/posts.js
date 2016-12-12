import {
    ADD_POST,
    FETCH_POSTS,
    FETCH_POSTS_FAIL,
    FETCH_POSTS_SUCCESS
} from '../constants/ActionTypes';

const initialState = [
    posts: {
        title: "Title for first post",
        text: "Welcome to the first post of qdd!"
    }, 
    isFetching: false
]

export function posts(state = initialState.posts, action) {
    switch (action.type) {
        case ADD_POST:
            return ([action.post, ...state]);
        default:
            return state;
    }
}

//export function fetchPosts(state = initialState, action){
    //switch(action.type){
        //case FETCH_POSTS: 
           //return Object.assign({}, state , {isFetching: action.isFetching}) 
        //case FETCH_POSTS_SUCCESSS:
            //return Object.assign({},state, posts: action.payload)
    //}
//}
