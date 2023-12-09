import Link from 'next/link'
import React from 'react'
import { iconList } from '../NavData'
const Icon = () => {
  return (
    <>
    {iconList.map((item) => {
        return(
           <item.title /> 
        )
    })}
    </>
  )
}

export default Icon