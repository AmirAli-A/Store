const productInfo =(id,name,price,description,photos,cardImage)=>{
    return {
        type:'PRODUCT_INFO' ,
        id:id,
        name:name,
        price:price,
        description:description,
        cardImage : cardImage,
        photos:photos,
        
    }

}

export const getProductInfo =(productInfo)=>{
    return {
        type:'GET_PRODUCT_INFO',
        payload : productInfo
          
    }
}
    
export const showDisplay =(currentStatus)=>{
    return {
        type:'SHOW_DISPLAY',
        payload : currentStatus
          
    }
}