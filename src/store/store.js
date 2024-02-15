import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoriteReducer} from "./favorites/favorites.slice.js";
import {userSlice} from "./user/user.slice.js";


const reducers = combineReducers({
    favorites:favoriteReducer,
    user: userSlice.reducer
})

export const store = configureStore({
    reducer:reducers
})
