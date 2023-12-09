import { amazingOffersProducts } from "../../components/ProductData";

const displayOn = false
const productDetail = []
const INITIAL_STATE = {amazingOffersProducts,productDetail,displayOn};

const ProductReducer =(state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case 'PRODUCT_INFO':
            return [...state]
        case 'GET_PRODUCT_INFO':
            return {...state,productDetail:[action.payload]}
        case 'SHOW_DISPLAY':
    return {...state,displayOn : action.payload}
        default:
            return state;
    }

}

export default ProductReducer;