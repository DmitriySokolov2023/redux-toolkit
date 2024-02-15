import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/favorites/favorites.slice.js";


import * as userActions from '../store/user/user.actions.js'

const rootActions = {
    ...actions,
    ...userActions
}
export const useActions = ({action}) =>{
    const dispatch = useDispatch()
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}