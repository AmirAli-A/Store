export const addToCart =(product,productId)=>{
    
    return {
        type:'ADD_TO_CART',
        payload : product,
        id:productId
       
}
}

export const addToQuantity =(productId,qy)=>{
    
    return {
        type:'ADD_TO_QUANTITY',
        id:productId,
        quantity:qy
        
}
}
export const decreaseQuantity =(productId)=>{
    
    return {
        type:'DEC_THE_QUANTITY',
        id:productId
}
}

export const deleteProductFromCart =(productId)=> {
    return {
        type:'DELETE_PRODUCT_FROM_CART',
        id:productId
    }
}
export const reciveId =(id)=> {
    return {
        type:'RECIVE_ID',
        id:id
    }
}