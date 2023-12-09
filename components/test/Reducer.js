import React, { useReducer } from 'react'

 const ACTIONS = {INCREAMENT:'inc',DECREAMENT:'dec'}

   const reducerFunc =(state,action)=>{
       switch(action.type){
        case ACTIONS.INCREAMENT:
        return {number : state.number + 1}
       
        case ACTIONS.DECREAMENT:
       return {number : state.number - 1}
       default:
        return state;
       }
    }


const Reducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, {number:0})
    
    const increaseNumber =()=>{
         dispatch({type : ACTIONS.INCREAMENT})
    }
    const decreaseNumber =()=>{
      dispatch({type : ACTIONS.DECREAMENT})
    }
 
  return (
    <>
    <button onClick={increaseNumber}>+</button>
    <span>{state.number}</span>
    <button onClick={decreaseNumber}>-</button>
    </>
  )
}

export default Reducer