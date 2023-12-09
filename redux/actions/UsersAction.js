const addMobileNumber =(mobileNumber)=>{
       return {
           type:'ENTER_MOBILE_NUMBER',
           userMobileNumber : mobileNumber
       }
}

const addMessageNumber =(messageCode)=>{
       return {
           type:'ENTER_MESSAGE_NUMBER',
           userMessageCode : messageNumber
       }
}

const addToShoppingCart =(id)=>{
    return {
        type:'ADD_TO_SHOPPING_CART',
        productId : id
    }
}