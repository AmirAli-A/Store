import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import style from './MobileMessagePage.module.scss'
import Logo from '../../components/header/logo/Logo'


const MobileMessagePage = () => {
     const formField = {password:''}
      const router = useRouter()
    const submitHandler = values =>{
         router.push("/sign")
    }
  return (
     
    <div className={style.container}>
     <Logo/>
        <span>کد تایید را وارد کنید</span>
        <p>
        کد تایید برای شما پیامک شد        
        </p>
         <Formik onSubmit={submitHandler} initialValues={formField}>
            <Form style={{display:'contents'}}>
                <Field name='password' type='number' className={style.formFields}/>
                <ErrorMessage name='password'/>
                <button type='submit' className={style.formButton}>تایید</button>
            </Form>
        </Formik>
    </div>
  )
}

export default MobileMessagePage