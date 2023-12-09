import React from 'react'
import LinkButton from '../../button/LinkButton';
import style from './LoginButton.module.scss'

const LoginButton = () => {
  return (

        <LinkButton href= "/login" linkClassname={`${style.loginRegisterButtonDesktop}`} 
         value={'ورود | ثبت نام'}
        />

  )
}

export default LoginButton