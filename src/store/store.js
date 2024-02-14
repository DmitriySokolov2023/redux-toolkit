import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoriteReducer} from "./favorites/favorites.slice.js";

const reducers = combineReducers({
    favorites:favoriteReducer,
})

export const store = configureStore({
    reducer:reducers
})
