import { complimentReducer, COMPLIMENT_KEY } from "./complimentRedux/compliment.reducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [COMPLIMENT_KEY]:complimentReducer
})

export {rootReducer}










