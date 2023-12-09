import React from 'react'
import SignUpPage from './SignUpPage'

const index = () => {
  return (
    <div>
        <SignUpPage/>
    </div>
  )
}

export default index

index.getLayout = function (page) {
       return (
        <>
        {page}
        </>
       )
}