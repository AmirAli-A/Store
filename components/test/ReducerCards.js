import React from 'react'
import ReducerCard from './ReducerCard'

const ReducerCards = (props) => {
  return (
    <>
           {
            props.dataList.map((info) => 
            <ReducerCard product_info={info} dispatch={props.dispatch}/>)
           }
    </>
  )
}

export default ReducerCards