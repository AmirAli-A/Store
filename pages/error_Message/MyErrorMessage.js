import React from 'react'

const MyErrorMessage = (props) => {
  return (
    <div>
        <h3 style={{color:'red'}}>
            {props.children}
        </h3>
    </div>
  )
}

export default MyErrorMessage