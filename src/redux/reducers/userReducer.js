import { 
    SET_USER, 
    SET_AUTHENTICATED, 
    SET_UNAUTHENTICATED,
    LOADING_USER
} from '../types';

const intitialState = {
    athenticated: false,
    loading: false,
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
                loading: false,
                ...action.payload
            }
        case LOADING_USER:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}