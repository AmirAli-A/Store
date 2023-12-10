import React from 'react'
import Picture from '../../pictures/Picture'
import style from './Logo.module.scss'

const Logo = () => {
  return (
    <Picture
    src='/images/eshop.svg'
    className={`${style.logo}`}
    alt='صفحه اصلی'
    href='/'
    />
   
  )
}

export default Logo 