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



import {CHANGE_STATS} from "../actions/statsActions.js";

const initialState = {
    stats: {
        followers: 0,
        following: 0
    }
}

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
case CHANGE_STATS: {
        const res = state[action.payload.statsType] + action.payload.sum;
        const stats = {...state, [action.payload.statsType]: res < 0 ? 0 : res};
        return {...state, stats};
    }
default:
    return state;
}
}