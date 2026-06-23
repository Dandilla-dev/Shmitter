import {createSlice} from '@reduxjs/toolkit'

const userNameSlice = createSlice( {
    name: "name",
    initialState:  'Monster',
    reducers: {
    changeName: (state, action) => action.payload
}
})

export const {changeName} = userNameSlice.actions;
export default userNameSlice.reducer;