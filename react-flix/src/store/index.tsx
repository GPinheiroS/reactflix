import { act } from "@testing-library/react";
import { Reducer, useReducer } from "react";
import { AnyAction, createStore } from "redux";
import * as videoData from './videoData'

const reducer = (state:videoData.state = videoData.initialState , action:AnyAction) => {
    console.log('Action=',action)
    console.log('State=',state)
    switch(action.type){
        case "TROCAR_VIDEO":
        return  { ...state, atual: action.video }
        break;
        case "SALVAR_CANAL":
        return {...state, select: action.ListaNova}
        break;
        default:
        return state
    }
    // if(action.type === "TROCAR_VIDEO"){
    //     console.log(action)
    //     console.log(state)
    //     return { ...state, atual: action.video }
    //     } 
    // return state ;
}

const store = createStore(reducer);


export default store