import React from 'react'
import MobileMessagePage from './MobileMessagePage'

const index = () => {
  return (
    <div>
        <MobileMessagePage/>
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