import {createSlice} from '@reduxjs/toolkit'

const userAvatarSlice = createSlice( {
    name: "user",
    initialState: {
        name: 'Monster'
    },
    reducers: {
        changeAvatar: (state, action) => action.payload
    }
})

export const {changeAvatar} = userAvatarSlice.actions;
export default userAvatarSlice.reducer;