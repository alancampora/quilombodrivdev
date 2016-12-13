import {ADD_POST, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL} from '../constants/ActionTypes';
import Api from '../api/Api'

export const fetchPosts = () => {
    return (dispatch) => {
        return Api
            .fetchPosts()
            .then( posts => { dispatch(fetchPostsSuccess(posts)) }) 
            .catch( error => { dispatch(fetchPostsFail(error)) })
    }
}

export const fetchPostsSuccess = (posts) =>{
    console.log('fetch posts success' , posts)
    return {
        type: FETCH_POSTS_SUCCESS,
        posts: posts
    }

}

export const fetchPostsFail = (error) =>{
    return {
        type: FETCH_POSTS_FAIL,
        payload:error 
    }

}
