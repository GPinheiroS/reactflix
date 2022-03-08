import { type } from "@testing-library/user-event/dist/type";
import { Reducer, useReducer } from "react";
import { AnyAction, createStore } from "redux";


export interface vid {readonly id:number, readonly title:string, readonly local:string}

export interface state {readonly atual:any, readonly select:vid[]}

const initialState:state = {
    atual:{},
    select:[
    {
    id: 1,
    title: 'Enquadros de Moto 43',
    local: 'https://www.youtube.com/watch?v=whk1toIgyTU'
},
    {
    id: 2,
    title: 'Lancheira da Nina',
    local: 'https://www.youtube.com/watch?v=DDaVNGOVCGc'
}
]}

const reducer = (state:state = initialState , action:AnyAction) => {
    if(action.type === "TROCAR_VIDEO"){
        console.log(action)
        console.log(state)
        return { ...state, atual: action.video }
        } 
    console.log(action)
    return state ;
}

const store = createStore(reducer);


export default store