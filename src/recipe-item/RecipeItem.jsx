import React from 'react';
import styles from './RecipeItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/favorites/favorites.slice.js";
const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state)

    const isExist = favorites.some(r => r.id === recipe.id)
    const dispatch = useDispatch()
    return (
        <div className={styles.item}>
            {/*<img src="" alt=""/>*/}
            <h3>{recipe.name}</h3>
            <button onClick={()=> dispatch(actions.toggleFavorites(recipe))}>{isExist ? 'Del to favorites' : 'Add to favorites'}</button>
        </div>
    );
};

export default RecipeItem;