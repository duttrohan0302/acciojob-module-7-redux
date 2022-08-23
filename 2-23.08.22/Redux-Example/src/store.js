import { createStore } from "redux";

import rootReducer from "./reducers/index"

const initialState = {
    operate: {
        num:5
    },
    rotate: {
        rotating: true
    }
}

function configureStore(state=initialState){
    return createStore(rootReducer,state)
}

export default configureStore