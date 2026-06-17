/*
type State = {
    user: {
        name: string,
        avatar: string,
    },
    stats: {
        followers: number,
        following: number
     }
}
*/



import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";

export const userReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state,name: action.payload || state.user.name}
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.user.avatar}
        default:
            return state;
}}