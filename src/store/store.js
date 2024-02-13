import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./favorites/favorites.slice.js";

export const store = configureStore({
    reducer:reducer
})
