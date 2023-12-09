import React, { useReducer, useState } from 'react'
import ReducerCards from './ReducerCards';

const reducer =(state,action)=>{
   switch(action.type){
     case 'add':
        return [...state,{id:Date.now(), productName:action.extra.name,productPrice:action.extra.price,showinSite:false}]
        case 'switch-case':
          return state.map((item) => {
            if (item.id === action.extra.id) {
              return {...item,showinSite: !item.showinSite} 
            }
            return state;
          })
          case 'delete-case':
            return state.filter((item) => {
              return item.id !== action.extra.id
            })
        default:
            return state;
   }
} 

const Reducer2 = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch({type:'add',extra:{name:name,price:price}})
        setName('')
        setPrice(0)
    }
    const changeNameHandler=(e)=>{
       setName(e.target.value)
    }
    const changePriceHandler=(e)=>{
        setPrice(e.target.value)
    }
  return (
    <>
       <form onSubmit={submitHandler}>
   <input type={'text'} value={name} onChange={changeNameHandler}/>
   <input type={'text'} value={price} onChange={changePriceHandler}/>
   <button>Add</button>

   </form>

  
        <ReducerCards dataList={state} dispatch={dispatch}/>
   
    </>


  )
}

export default Reducer2