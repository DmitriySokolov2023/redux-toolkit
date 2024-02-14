import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import styles from './Header.module.css'
import {useSelector} from "react-redux";
import {useFavorites} from "../../hooks/useFavorites.js";

const Header = () => {
    const favorites = useFavorites()

    return (
        <header className={styles.header}>
            <FaRegHeart style={{color:'#cb4646', fontSize:'25px'}}/>
            <span style={{marginLeft:'3px'}}>{favorites.length}</span>
        </header>
    );
};

export default Header;