import React from 'react'
import Picture from '../../pictures/Picture'
import style from './Logo.module.scss'

const Logo = () => {
  return (
    <Picture
    src='images/digikalaLogo.png'
    className={`${style.logo}`}
    alt='صفحه اصلی'
    href='/'
    />
  )
}

export default Logo