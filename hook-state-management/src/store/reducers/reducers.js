import { userReducer } from "./userReducer";
import  {initailState} from "../initialStates/initailState"
import {counterReducer} from "./counterReducer";

const reducer = (state = initailState, action) => {
    return {
        userState: {...userReducer(state.userState, action)},
        countState: {...counterReducer(state.countState, action)} 
    }
}

export {initailState, reducer};