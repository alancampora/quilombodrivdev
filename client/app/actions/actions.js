import * from '../constants/ActionTypes';

let nextPostId = 0;

export const addPost = (post) => ({type: ADD_POST,id: nextPostId++,post: post});
