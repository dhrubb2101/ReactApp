import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { create } from "json-server";

const API_URL = "http://localhost:8888/products";

//To handle async API calls,asynchronous methods we can use createAsyncThunk

//get request
export const fetchData = createAsyncThunk("api/fetchData", async ()=>{
    const response = await axios.get(API_URL);
    return response.data;
})
//delete request
export const deleteData = createAsyncThunk("api/deleteData", async (id)=>{
    if(window.confirm(`Are you sure you want to delete product with ${id}?`)){
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
})

//post request
export const createData = createAsyncThunk("api/createData", async (newData)=>{
    const response = await axios.post(API_URL,newData);
    return response.data;
})

//get request for single product
export const getSingleData = createAsyncThunk("api/getSingleData", async (id)=>{
    if(window.confirm(`Are you sure you want to edit product with ${id}?`)){
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    }
})

//put request
export const updateData = createAsyncThunk("api/updateData", async (id,updateData)=>{
    const response = await axios.put(`${API_URL}/${id}`,updateData);
    return response.data;
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
        .addCase(deleteData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = state.data.filter((item)=>item.id !== action.payload);
       })
        .addCase(deleteData.rejected,(state,action)=>{
            state.status = "failed";
            state.error =action.error.message;

        })
        .addCase(createData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(createData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data.push(action.payload)
       })
        .addCase(createData.rejected,(state,action)=>{
            state.status = "failed";
            state.error =action.error.message;

        })
        .addCase(getSingleData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(getSingleData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = action.payload
       })
        .addCase(getSingleData.rejected,(state,action)=>{
            state.status = "failed";
            state.error =action.error.message;

        })
        .addCase(updateData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(updateData.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.data = action.payload
        })
        .addCase(updateData.rejected,(state,action)=>{
            state.status = "failed";
            state.error =action.error.message;

        })
        
    }
})

export default ApiSlice.reducer;