import React from 'react'

const ReducerCard = (props) => {
  return (
    <>
         <h3 style={{color:props.product_info.showinSite==false ? 'red' : 'black' }}>{props.product_info.productName} - - - {props.product_info.productPrice}</h3>
         <button onClick={()=>{props.dispatch({type:'switch-case',extra:{id:props.product_info.id}})}} >تغییر وضعیت</button>
         <button onClick={()=>{props.dispatch({type:'delete-case',extra:{id:props.product_info.id}})}}>حذف</button>
    </>
  )
}

export default ReducerCard