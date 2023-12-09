import {  Field, Form , ErrorMessage, Formik } from 'formik'
import React from 'react'
import { formFields } from '../login/FormFields'
import MyErrorMessage from '../error_Message/MyErrorMessage'
import { useRouter } from 'next/router'
import Logo from '../../components/header/logo/Logo'
import { validationSchema } from '../../public/validation/ValidationSchema'
import style from './SignUpPage.module.scss'


const SignUpPage = () => {

    const url = useRouter()

    const submitHandler = values=>{
         console.log(values)   // Send info to a component for Example
         url.push('/')
    }
                
  return (
    <div className={style.container} >
        <Logo/>
        <h2>ثبت نام</h2>
        <Formik onSubmit={submitHandler} validationSchema={validationSchema} initialValues={formFields}>

       <Form className={style.form}>
        {
            formFields.map((item) => {
                return(
                    <div key={item.id}>
                    
                     <label>{item.label}</label>
                     <Field  type={item.type} name={item.info} className={style.formFields}/>
                     <ErrorMessage name={item.info[1]} component={MyErrorMessage}/>
                     
                     <br/>

                    </div>
                  
                )
            })
        }
            
            <button type='submit' className={style.formButton} >تایید</button>
        </Form>

        </Formik>
     
    </div>
  )
}

export default SignUpPage