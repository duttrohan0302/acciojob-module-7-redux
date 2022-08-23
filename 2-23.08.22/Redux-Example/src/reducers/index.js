import { combineReducers } from "redux";
import operationReducer from "./operationReducer";
import rotateReducer from "./rotateReducer";

export default combineReducers({
    operate: operationReducer,
    rotate: rotateReducer
})