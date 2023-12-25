import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {}
}
export const accountSlice = createSlice({
    name: "accout",
    initialState,
    reducers: {
        logIn : (state,action) => {
            state.value = action.payload;
            localStorage.setItem("account",JSON.stringify(state.value))
        },
        logOut : (state,action) => {
            state.value = {};
            localStorage.setItem("account",JSON.stringify(state.value))
        }
    }
})
export const selectAccout = state => state.accountReducer.value
export const {logIn,logOut} = accountSlice.actions
export default accountSlice.reducer