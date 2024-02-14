import {createSlice} from "@reduxjs/toolkit";
import {getUserById} from "./user.actions.js";

export const userSlice = createSlice({
    name:'users',
    initialState:{
        isLoading:false,
        error:null,
        user:{}
    },
    reducers:{},
    extraReducers:builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
        })
    }
})