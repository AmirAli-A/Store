import * as Yup from 'yup';

   export const validationSchema = Yup.object({
        name:Yup.string().required('please enter name'),
        lastname:Yup.string().required('please enter lastname'),
        password:Yup.string().required('please enter password'),
        mobile: Yup.number().required('please enter phone number'),
        email:Yup.string().email('invalid Email Format').required('please enter email'),
        age:Yup.number('age must be a number').required('please enter age').positive()
        .integer('age must be a integer number'),
    })