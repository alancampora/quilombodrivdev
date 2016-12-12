import {ADD_POST, FETCH_POSTS, FETCH_POSTS_SUCCESS} from '../constants/ActionTypes';

let nextPostId = 0;

export const addPost = (post) => ({
    type: ADD_POST,
    id: nextPostId++,
    post: post
})

export const fetchPosts = () => {
    const request = 'this is a request'
    return{
        type: FETCH_POSTS,
        payload: request,
        isFetching: true}
}

export const fetchPostsSuccess = (response) =>{
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: response.posts,
        isFetching:false 
    }

}
