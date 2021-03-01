
import { LOADING, SET_DATA, CLEAR_DATA } from '../types.redux';

const initialState = {
    loading: false,
    data: [],
    user_info: null,
    All_repos: null,
    stared: null
};

export default function (state = initialState, action) {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_DATA:
            return {
                ...state,
                user_info: action.payload.userInfo,
                All_repos: action.payload.AllRapo,
                stared: action.payload.stared,
                loading: false
            };
        case CLEAR_DATA:
            return {
                ...state,
                data: null,
                loading: false
            }
        default:
            return state;
    }
}
