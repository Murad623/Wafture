import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
    page: 0
}
export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNews : (state,action) => {
            if (action.payload[0] == undefined) {
                state.value = action.payload.value;
                state.page = parseInt(action.payload.page);
            }else{
                state.value = action.payload;
                console.log(state.value);
            }
        },
        setPage : (state,action) =>{
            state.page = action.payload;
            localStorage.setItem("news",JSON.stringify(state))
        }
    }
})
export const selectNews = state => state.newsReducer.value
export const selectPage = state => state.newsReducer.page
export const {setNews,setPage} = newsSlice.actions
export default newsSlice.reducer