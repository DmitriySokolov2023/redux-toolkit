import styles from './RecipeItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/favorites/favorites.slice.js";
import {useActions} from "../../hooks/useActions.js";
import {FaRegHeart} from "react-icons/fa";
import React from "react";
const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state)
    const isExist = favorites.some(r => r.id === recipe.id)
    const {toggleFavorites} = useActions(actions.toggleFavorites)

    return (
        <div className={styles.item}>
            {/*<img src="" alt=""/>*/}
            <h3>{recipe.name}</h3>
            <FaRegHeart onClick={()=>toggleFavorites(recipe)} className={isExist ? 'button active' : 'button'}/>
        </div>
    );
};

export default RecipeItem;