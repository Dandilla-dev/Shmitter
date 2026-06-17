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

const initialState = {
    user: {
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload || state.name}
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.avatar}
        default:
            return state;
}}