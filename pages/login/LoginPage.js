import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from '../../components/header/logo/Logo'
import style from './LoginPage.module.scss'
import { validationSchema } from '../../public/validation/ValidationSchema'

const LoginPage = () => {
    
    //const [formValue, setFormValue] = useState();
    const formField = {mobile:''}
    //const loginRouter  = useRouter()
    // const onSubmit = values =>{
     
    //  console.log('this is the form value :',values)
    //  //loginRouter.push("/mobilemessage")
    // }
    const handleGelol =(e)=>{
       console.log('this is form Event : ',e.target[0].value)
       console.log('and this is form Filed : ',formField)
       e.preventDefault()
    }
  return (
    <div >
      <div className={style.container}>
        <Logo/>
        <span>ورود | ثبت نام</span>
        <p>سلام!
لطفا شماره موبایل  خود را وارد کنید
        </p>
        <Formik 
         onSubmit={(values , {setsu} )=>{
           

          console.log('this is the form value :',values)
          //loginRouter.push("/mobilemessage")
         }}
         initialValues={formField}
         validationSchema={validationSchema}
         >
         
                   <Form style={{display:'contents'}} onSubmit={handleGelol}>
                <Field id='mobile' name='mobile' type='text' className={style.formFields}/>
                <ErrorMessage name='mobile'/>
                <button type='submit' className={style.formButton}>ورود</button>
                 </Form>
             
        </Formik>
    </div>
      </div>
 
  )
}

export default LoginPage

