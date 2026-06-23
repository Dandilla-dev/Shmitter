import {createSlice} from '@reduxjs/toolkit'

const userAvatarSlice = createSlice( {
    name: "avatar",
    initialState: 'https://gravatar.com/avatar/000?d=monsterid',
    reducers: {
        changeAvatar: (state, action) => action.payload
    }
})

export const {changeAvatar} = userAvatarSlice.actions;
export default userAvatarSlice.reducer;