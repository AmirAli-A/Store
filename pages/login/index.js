import React from "react";
import LoginPage from "./LoginPage";
import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import style from "./LoginPage.module.scss";
import Logo from "../../components/header/logo/Logo";

const index = () => {
  const validation = Yup.object({
    name: Yup.string()
      .required("please enter name")
      .min(3, "your name must be atleast 3 digit")
      .max(7, "your name must be maximun 7 digit"),
    mobile: Yup.number("your phone number must be from number").required(
      "please enter you phone number"
    ),
    // .min(11,'phone number must have 10 digit').max(11,'phone number must have 10 digit')
  });
  const formField = { mobile: "" };
  //   const handleGelol =(e)=>{
  //     console.log('this is form Event : ',e.target[0].value)
  //     console.log('and this is form Filed : ',formField)
  //     e.preventDefault()
  //  }
  return (
    <div>
      <LoginPage />
    </div>
    /////////////////////////////////
    // <Formik
    //  onSubmit={(values )=>{
    //      console.log('this is formik values',values)
    //  }}
    //  validationSchema={validation}
    //  initialValues={{
    //     name:''
    //  }}
    // >
    //   {({isSubmitting}) =>(
    //   <Form>
    //     <Field name='name' id='name'/>
    //     <ErrorMessage name='name'/>
    //     <button type='submit' isLoading={isSubmitting}>تایید</button>
    //   </Form>
    //  )}
    // </Formik>

    //const [formValue, setFormValue] = useState();

    //const loginRouter  = useRouter()
    // const onSubmit = values =>{

    //  console.log('this is the form value :',values)
    //  //loginRouter.push("/mobilemessage")
    // }

    //      <div >
    //        <div className={style.container}>
    //          <Logo/>
    //          <span>ورود | ثبت نام</span>
    //          <p>سلام!
    //  لطفا شماره موبایل  خود را وارد کنید
    //          </p>

    //----------------------------------------------------------------------------------------------------------------//

    //  <Formik
    //   onSubmit={(values)=>{

    //    console.log('this is the form value :',values)
    //    //loginRouter.push("/mobilemessage")
    //   }}
    //   validationSchema={validation}
    //   initialValues={{mobile:''}}

    //   >

    //             <Form>
    //          <Field id='mobile' name='mobile' />
    //          <ErrorMessage name='mobile'/>
    //          <button type='submit' >ورود</button>
    //           </Form>

    //  </Formik>
    //  </div>
    //    </div>
  );
};

export default index;

index.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
