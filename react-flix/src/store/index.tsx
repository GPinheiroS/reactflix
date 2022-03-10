import { Reducer, useReducer } from "react";
import { AnyAction, createStore } from "redux";
import * as videoData from './videoData'

const reducer = (state:videoData.state = videoData.initialState , action:AnyAction) => {
    if(action.type === "TROCAR_VIDEO"){
        console.log(action)
        console.log(state)
        return { ...state, atual: action.video }
        } 
    return state ;
}

const store = createStore(reducer);


export default store