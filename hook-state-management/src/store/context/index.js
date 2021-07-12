import { initailState, reducer } from "../reducers/reducers";
import { useAction } from "../actions/useAction";

import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext(initailState);

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initailState);
    const actions = useAction(state, dispatch)

    return (
        <StoreContext.Provider value={{ state, dispatch, actions }} {...props} />
    )
}

export const useGlobalContext = () => {
    const context = useContext(StoreContext); 

    if(!context){
        throw new Error("the componente need to use StoreContext.Provider")
    }

    return context; 
} 

export { StoreContext, StoreProvider }
