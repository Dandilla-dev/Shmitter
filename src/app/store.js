import {configureStore} from "@reduxjs/toolkit";
import avatar from "../features/user/avatarSlice.js"
import name from "../features/user/userSlice.js"
import stats from "../features/stats/statsSlice.js"

export const store = configureStore({
    reducer: {
avatar, name, stats
    },
});