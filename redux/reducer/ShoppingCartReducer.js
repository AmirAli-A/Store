import { produce } from "immer";


const INITIAL_STATE =[];


export const ShoppingCartReducer =(state=INITIAL_STATE,action)=>{
     
     
   
   let exactProduct = 0
const findProductIndex =(actionId)=>{
const foundProduct = state.findIndex(item=>item.id===actionId)   
         exactProduct = foundProduct
          }

          const multipyProductPrice =(productCount,producePrice)=> {
                    
          }

    switch (action.type) {
          
      
        case 'ADD_TO_CART':
            findProductIndex(action.id)
            
         
          
            const someProduct = action.payload
            
        
            if(exactProduct === -1){
                      return produce(state,(draft)=>{
                       
                      draft.push({...someProduct,productQuantity:1
                     ,productPriceInCart:someProduct.price_after})
                     
                    
                         })
            }
       
             //[...state,{...someProduct,productQuantity:1}] 
            
                
                
           
             
                // return {...state,cartProducts:,productIndex,productQuantity :+ 1}
           
                
            
        case 'ADD_TO_QUANTITY':

             findProductIndex(action.id)
         
                 return  produce(state,(draft)=>{
                    
                   draft[exactProduct].productQuantity+=1
                   const result = draft[exactProduct].productQuantity * draft[exactProduct].price_after
                   draft[exactProduct].productPriceInCart = result
                   console.log('the result is :',result)
                   

                })
             
                     
              
           

           
        case 'DEC_THE_QUANTITY':
            findProductIndex(action.id)
           return produce(state,(draft)=>{
            
                draft[exactProduct].productQuantity-=1
                const result = draft[exactProduct].productQuantity * draft[exactProduct].price_after
                draft[exactProduct].productPriceInCart = result
                console.log('the result is :',result)

             })
           
        case 'DELETE_PRODUCT_FROM_CART':
            findProductIndex(action.id)
           return produce(state,(draft)=>{
            
              return draft.filter(item => item.id !== action.id)
                
                })
       
            
        default:
            return state;
    }



 }