import React from 'react'

const NormalButton = (props) => {
  return (
    <div className={props.btnContainer}>
        <button onClick={props.onClick}>{props.value}</button>
    </div>
  )
}

export default NormalButton