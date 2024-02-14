import { useState } from 'react'
import RecipeItem from "./recipe-item/RecipeItem.jsx";
import {useSelector} from "react-redux";
import {favoritesSlice} from "./store/favorites/favorites.slice.js";


function App() {
    const {favorites} = useSelector(state => state)
  return (

        <div>
            <h1>В избранном: {favorites.length}</h1>
            <RecipeItem recipe={{
                id:1,
                name:'Лазанья'
            }}/>
            <RecipeItem recipe={{
                id:2,
                name:'Каша'
            }}/>
            <RecipeItem recipe={{
                id:3,
                name:'Суп'
            }}/>
        </div>
  )
}

export default App
