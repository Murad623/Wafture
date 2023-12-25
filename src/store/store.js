import { configureStore } from "@reduxjs/toolkit"
import accountSlice from "./accountSlice"
import newsSlice from "./newsSlice"
export const store = configureStore({
    reducer: {
        accountReducer: accountSlice,
        newsReducer: newsSlice
    }
})
export default store