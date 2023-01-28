import * as yup from 'yup';

//password rule
const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ' Name must be at least 2 characters')
    .max(20)
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
  password: yup
    .string()
    .min(5, 'password should contain 5-16 characters')
    .max(16, 'password should contain 5-16 characters')
    .matches(passwordRule, 'Please create a stronger password')
    .required('Required'),
  cpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
});
export const editSema = yup.object().shape({
  name: yup
    .string()
    .min(2, ' Name must be at least 2 characters')
    .max(20)
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
  
});
