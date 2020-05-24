import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types';

const intitialState = {
    athenticated: false,
    credentials: {},
    likes: [],
    notications: []
};

export default function(state = intitialState, action) {
    switch(action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return intitialState;
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        default:
            return state;
    }
}