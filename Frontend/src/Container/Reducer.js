import { initialstate } from "./InitialState";
import React from 'react'

const Reducer=(state=initialstate, action)=>{
    switch(action.type){
        
    case "ADD": 
    return {
        ...state,userDetails:action.payload
    }
    
        default : return state
    }
}
export default Reducer
