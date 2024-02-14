import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/favorites/favorites.slice.js";

const rootActions = {
    ...actions
}
export const useActions = ({action}) =>{
    const dispatch = useDispatch(action)
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}