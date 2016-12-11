import {ADD_TODO} from '../constants/ActionTypes';

const initialState = [{
    title: "Title for first post",
    text: "Welcome to the first post of qdd!"
}]

export default function posts(state = initialState, action) {

    switch (action.type) {
        case 'ADD_POST':
            return ([action.post, ...state]);
        default:
            return state;
    }

}


