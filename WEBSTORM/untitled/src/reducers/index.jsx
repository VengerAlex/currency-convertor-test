import {combineReducers} from "redux";

import counterReducer from "./counter";
import loogedReducer from "./isLooged";

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loogedReducer
})

export default allReducers