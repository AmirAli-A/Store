import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import ProductReducer from "./ProductReducer";
import { PhotosReducer } from "./PhotosReducer";
import { ShoppingCartReducer } from "./ShoppingCartReducer";

const rootReducer = combineReducers(

    {
        user : UsersReducer,
        product : ProductReducer,
        photos : PhotosReducer,
        shoppingCart : ShoppingCartReducer
    }
    
)

export default rootReducer