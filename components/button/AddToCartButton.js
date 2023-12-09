import React from 'react'

const AddToCartButton = (props) => {
  return (
    <button className={props.className} onClick={props.func}>{props.value}</button>
  )
}

export default AddToCartButton