import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../API/ApiSlice";

const store = configureStore({
    reducer:{
        api:ApiSlice
    }
})

export default store