import { Formik , Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import { formFields } from '../../pages/login/FormFields'
import MyErrorMessage from '../../pages/error_Message/MyErrorMessage'
import { validationSchema } from '../../public/validation/ValidationSchema'
import style from './SmallForm.module.scss'

const SmallForm = (props) => {
    const submitHandler=()=>{

    }
  return (
    <div className={style.container}>
        <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} >
            <Form >
                {/* <label>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</label> */}
                 <p>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                <Field type={props.type} name={props.name} className={props.fieldStyle}/>
                <ErrorMessage name={props.name} component={MyErrorMessage}/>
                <button type='submit'>{props.buttonValue}</button>
            </Form>
        </Formik>
    </div>
  )
}

export default SmallForm