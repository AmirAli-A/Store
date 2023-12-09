
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducer/ReducerCombiner";
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
const Store = configureStore({
    reducer : rootReducer,    
})

export default Store; 