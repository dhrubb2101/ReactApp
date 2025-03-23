import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { create } from "json-server";

const API_URL = "https://localhost:8888/products";

//To handle async API calls,asynchronous methods we can use createAsyncThunk


export const fetchData = createAsyncThunk("api/fetchData", async ()=>{
    const response = await axios.get(API_URL);
    return response.data;
})

export const deleteData = createAsyncThunk("api/deleteData", async (id)=>{
    if(window.confirm(`Are you sure you want to delete product with ${id}?`)){
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
})


const ApiSlice = createSlice({
    name:"api", //api is your action
    initialState:{
        data:[],
        status:"idle",
        error:null
        
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = action.payload;
       })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status = "failed";
            state.error =action.error.message;

        })
    }
})

export default ApiSlice.reducer;